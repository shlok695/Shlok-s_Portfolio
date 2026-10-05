// Build and deploy on every push. Before each deploy, the live code is copied
// to a timestamped backup folder and only the newest 3 backups are kept.
//
// Works with a regular Pipeline job ("Pipeline script from SCM").

pipeline {
  // CHANGE: your Jenkins node name/label for the server.
  agent { label 'server' }

  environment {
    APP_DIR      = '/home/shlok/portfolio/Portfolio'           // CHANGE: live code folder on the server
    BACKUP_DIR   = '/home/shlok/portfolio_backup'   // CHANGE: must NOT be inside APP_DIR
    SRC_DIR      = '.'                                  // CHANGE: repo folder to deploy, e.g. 'Frontend'
    PORT         = '3003'                               // must match docker-compose.yml
    KEEP         = '3'
    COMPOSE_FILE = "${APP_DIR}/docker-compose.yml"
  }

  options {
    skipDefaultCheckout(true)
    disableConcurrentBuilds()
  }

  triggers {
    // Fires instantly if GitHub can reach this Jenkins through a webhook.
    githubPush()
    // Fallback: checks Git about every 2 minutes, builds only on new commits.
    pollSCM('H/2 * * * *')
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Backup') {
      steps {
        sh '''
          set -eu
          mkdir -p "$BACKUP_DIR"
          rm -f "$BACKUP_DIR/.last_backup"

          # 1. Copy the live code to a timestamped folder.
          if [ -d "$APP_DIR" ] && [ -n "$(ls -A "$APP_DIR" 2>/dev/null)" ]; then
            TS=$(date +%Y-%m-%d_%H-%M-%S)
            echo "Backing up $APP_DIR to $BACKUP_DIR/$TS"

            rsync -a \
              --exclude='.git' \
              --exclude='node_modules' \
              --exclude='.next' \
              "$APP_DIR/" "$BACKUP_DIR/$TS/"

            # Remember this backup so Rollback knows what to restore.
            echo "$BACKUP_DIR/$TS" > "$BACKUP_DIR/.last_backup"
          else
            echo "Nothing deployed yet, skipping backup."
          fi

          # 2. Keep only the newest $KEEP backups. Folder names are timestamps,
          #    so reverse-sorting puts the newest first.
          find "$BACKUP_DIR" -mindepth 1 -maxdepth 1 -type d \
            | sort -r \
            | tail -n +$((KEEP + 1)) \
            | while read -r old; do
                echo "Removing old backup: $old"
                rm -rf -- "$old"
              done

          echo "Backups kept:"
          ls -1 "$BACKUP_DIR"
        '''
      }
    }

    stage('Copy Files') {
      steps {
        sh '''
          set -eu
          mkdir -p "$APP_DIR"

          rsync -av --delete \
            --exclude='.git' \
            --exclude='.env' \
            --exclude='.env.local' \
            --exclude='node_modules' \
            --exclude='.next' \
            "./$SRC_DIR/" "$APP_DIR/"
        '''
      }
    }

    stage('Build') {
      steps {
        sh '''
          set -eu

          # Use plain docker if this user can, otherwise passwordless sudo.
          DOCKER="docker"
          docker ps >/dev/null 2>&1 || DOCKER="sudo -n docker"

          if [ ! -f "$COMPOSE_FILE" ]; then
            echo "docker-compose file not found at $COMPOSE_FILE"
            ls -la "$APP_DIR"
            exit 1
          fi

          cd "$APP_DIR"
          $DOCKER compose -f "$COMPOSE_FILE" build --no-cache
        '''
      }
    }

    stage('Deploy') {
      steps {
        // On failure: mark the build failed but keep going, so Rollback runs.
        catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
          sh '''
            set -eu

            DOCKER="docker"
            docker ps >/dev/null 2>&1 || DOCKER="sudo -n docker"

            cd "$APP_DIR"
            $DOCKER compose -f "$COMPOSE_FILE" down || true
            $DOCKER compose -f "$COMPOSE_FILE" up -d
          '''
        }
      }
    }

    stage('Smoke Test') {
      when { expression { currentBuild.currentResult == 'SUCCESS' } }
      steps {
        catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
          sh '''
            # Waits up to ~2.5 minutes for the app to answer on its port.
            for i in $(seq 1 30); do
              if curl -fsS -o /dev/null "http://localhost:$PORT"; then
                echo "App is responding on port $PORT"
                exit 0
              fi
              echo "Not up yet (attempt $i/30)"
              sleep 5
            done

            echo "App did not respond on port $PORT"
            exit 1
          '''
        }
      }
    }

    // Runs only if Deploy or Smoke Test failed. Restores the code that was
    // live before this build and brings it back up. The build stays marked
    // as failed, because the new code did not go live.
    stage('Rollback') {
      when { expression { currentBuild.currentResult == 'FAILURE' } }
      steps {
        sh '''
          set -eu

          DOCKER="docker"
          docker ps >/dev/null 2>&1 || DOCKER="sudo -n docker"

          if [ ! -f "$BACKUP_DIR/.last_backup" ]; then
            echo "No backup from this build (first deploy?). Nothing to roll back to."
            exit 1
          fi

          LAST=$(cat "$BACKUP_DIR/.last_backup")
          echo "Rolling back to $LAST"

          rsync -a --delete \
            --exclude='.env' \
            --exclude='.env.local' \
            --exclude='node_modules' \
            --exclude='.next' \
            "$LAST/" "$APP_DIR/"

          cd "$APP_DIR"
          $DOCKER compose -f "$COMPOSE_FILE" down || true
          $DOCKER compose -f "$COMPOSE_FILE" up -d --build

          for i in $(seq 1 30); do
            if curl -fsS -o /dev/null "http://localhost:$PORT"; then
              echo "Rollback complete: previous version is responding on port $PORT"
              exit 0
            fi
            echo "Previous version not up yet (attempt $i/30)"
            sleep 5
          done

          echo "Rollback finished but the app is still not responding. Check it by hand."
          exit 1
        '''
      }
    }

    stage('Clean Up') {
      steps {
        sh '''
          DOCKER="docker"
          docker ps >/dev/null 2>&1 || DOCKER="sudo -n docker"

          # Removes build cache and leftover untagged images from old builds.
          $DOCKER builder prune -af || true
          $DOCKER image prune -f || true
        '''
      }
    }
  }
}
