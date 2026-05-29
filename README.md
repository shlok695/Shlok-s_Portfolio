# Shlok Shah's Project Hub & Portfolio

A premium, Apple-inspired personal portfolio and project hub built with Next.js, Tailwind CSS, and Framer Motion. This project is specifically designed to be deployed on a self-hosted home server using Docker and Tailscale Funnel.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- Framer Motion
- Lucide React
- Docker

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   *Note: The development server runs on port **3003** by default to prevent conflicts with other services.*

3. Open [http://localhost:3003](http://localhost:3003) in your browser.

## Build Commands
- **Build**: `npm run build`
- **Start**: `npm start` (Runs on port 3003)

## Docker Deployment

This application includes a multi-stage `Dockerfile` optimized for Next.js standalone output.

### Build the Docker image
```bash
docker build -t shlok-portfolio .
```

### Run the Docker container
```bash
docker run -d --name shlok-portfolio -p 3003:3003 shlok-portfolio
```

## Tailscale & Deployment Notes

This app is intended to run on **port 3003** because ports 3000, 3001, and 3002 are already used by other applications (`repopilot` and `campuskart`).

The application should be exposed via **Tailscale Funnel** alongside the other applications, with a reverse proxy routing paths to the appropriate ports:
- `/` -> Project Hub (Port 3003)
- `/home` -> Portfolio (Port 3003)
- `/report` -> Reports (Port 3003)
- `/projects/*` -> Portfolio Case Studies (Port 3003)
- `/repopilot` -> RepoPilot (Port 3000)
- `/campuskart` -> CampusKart (Port 3001)
