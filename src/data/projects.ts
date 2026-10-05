export interface CaseStudyData {
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture?: string;
  security?: string;
  deployment?: string;
  future?: string;
  challenges: string[];
  solutions: string[];
  highlight: string;
  /** Short one-liners used on the hub page's "Real Challenges" cards */
  challengeSummary: string;
  solutionSummary: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
  reportLink: string;
  caseStudy: CaseStudyData;
}

export const projects: ProjectData[] = [
  {
    slug: "ipl",
    title: "IPL Dashboard",
    description:
      "Interactive dashboard for exploring Indian Premier League cricket statistics, match data, and team performance.",
    tags: ["Data Visualization", "Sports", "React", "Analytics"],
    liveLink: "/ipl",
    githubLink: "https://github.com/shlok695/fantasy-ipl",
    reportLink: "/Shlok_Shah_IPL_Report.pdf",
    caseStudy: {
      problem:
        "Families and friend groups need a customized, private platform to conduct real-time IPL player auctions and manage their own fantasy leagues with automated Dream11-style points calculation.",
      solution:
        "A full-stack, real-time Fantasy IPL application designed specifically for private leagues. It features a live interactive auction room, custom franchise management, and a robust automated points calculation engine.",
      features: [
        "Live auction room with admin-controlled player sales and ₹100 Cr franchise budget management",
        "Dream11-style T20 points engine processing runs, wickets, and strike-rate into fantasy scores",
        "Top Performers tracker (Orange Cap, Purple Cap, Firepower, Control) across the league",
        "True 11-Man aggregate scoring that algorithmically finds each team's best XI across the season",
        "Dedicated sync-worker service for scheduled, automated live match syncing via cricket REST APIs",
        "NextAuth credential-based franchise login with bcrypt password hashing",
      ],
      techStack: ["Next.js", "TypeScript", "Prisma", "SQLite", "NextAuth", "Docker", "Tailwind CSS"],
      architecture:
        "The application uses a Next.js (App Router) and TypeScript frontend with a glassmorphism, dark-mode UI, backed by Prisma ORM over SQLite. A dedicated Dockerized sync-worker service runs on a schedule to pull live match data from a cricket REST API (with a RapidAPI/Cricbuzz fallback) and automate score syncing and points calculation independently of the main app.",
      challenges: [
        "Organizing IPL-related information in a way that is easy to explore.",
        "Presenting teams, matches, statistics, or insights without making the interface cluttered.",
        "Designing a dashboard or data-driven interface with clear visual hierarchy.",
        "Handling different types of sports data such as teams, players, matches, scores, or performance metrics.",
        "Making the application interesting for both casual viewers and users looking for insights.",
        "Testing data accuracy, filtering, navigation, and responsiveness.",
        "Managing edge cases such as missing data, inconsistent data, or confusing display formats.",
        "Making the project useful as a demonstration of data presentation and user-focused design.",
      ],
      solutions: [
        "Built an interactive cricket-focused project around IPL data and insights.",
        "Converted sports information into a clean and engaging user experience using clean information organization.",
        "Designed the project to strongly demonstrate data presentation, dashboard thinking, and user-focused design.",
        "Applied rigorous UI testing practices to validate data display, navigation, UI behavior, and responsiveness.",
        "Made the project accessible for both technical reviewers and general users.",
        "Created a project that turns a familiar real-world topic into a structured software experience.",
      ],
      highlight:
        "IPL transforms complex sports data into a clean, interactive experience, showcasing strong data presentation, dashboard thinking, UI testing, and clean information organization.",
      challengeSummary: "Organizing IPL-related information in a way that is easy to explore.",
      solutionSummary: "Built an interactive cricket-focused project around IPL data and insights.",
    },
  },
  {
    slug: "aerologistics",
    title: "Aerologistics",
    description:
      "Interactive full-stack explorer for global airlines, airports, and flight routes with live search and map visualization.",
    tags: ["Aviation Data", "Full Stack", "Maps & Visualization", "PostgreSQL"],
    liveLink: "/aerologistics",
    githubLink: "https://github.com/shlok695/flight-info-system",
    reportLink: "/Shlok_Shah_AeroLogistics_Report.pdf",
    caseStudy: {
      problem:
        "Exploring global airline networks, airport metadata, and flight routes is scattered across disconnected sources, making it hard to quickly search, cross-reference, and visualize how airlines and airports actually connect.",
      solution:
        "A full-stack flight information explorer with a fast, card-based search UI for airlines and airports, live route lookups, and interactive Leaflet.js/OpenStreetMap route visualization, deployed on AWS EC2.",
      features: [
        "Search airlines by country name or IATA/ICAO code",
        "Explore all routes departing from a selected airport",
        "Interactive Leaflet.js + OpenStreetMap route visualization",
        "Airport metadata lookup with connected airline listings",
        "CSV-based aviation dataset ingestion via PapaParse into PostgreSQL",
        "Responsive, card-based UI across devices",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "JavaScript", "Leaflet.js", "AWS EC2"],
      architecture:
        "A Node.js and Express.js backend serves airline, airport, and route data sourced from CSV datasets (parsed with PapaParse) into a PostgreSQL database. The vanilla JavaScript frontend renders searchable, card-based results and plots routes on an interactive Leaflet.js map backed by OpenStreetMap tiles. The application is deployed on an AWS EC2 (Ubuntu) instance.",
      challenges: [
        "Cross-referencing three linked datasets (airlines, airports, and routes) cleanly from raw CSV sources.",
        "Designing a search experience that works whether a user starts from an airline, an airport, or a route.",
        "Rendering many overlapping routes on a single Leaflet map without it becoming unreadable.",
        "Keeping lookups fast as the dataset grew, without reaching for a heavy client-side framework.",
        "Thinking through how the UI would be used to visually spot patterns or gaps in route coverage.",
        "Deploying and keeping a Node/Express + PostgreSQL stack running reliably on a bare AWS EC2 instance.",
      ],
      solutions: [
        "Parsed and normalized CSV airline/airport/route datasets with PapaParse into a relational PostgreSQL schema.",
        "Built a card-based search UI that lets users pivot between airlines, airports, and routes.",
        "Integrated Leaflet.js with OpenStreetMap tiles to visualize routes interactively without heavy mapping SDK overhead.",
        "Kept the frontend framework-free (vanilla JS) to keep lookups fast and the deployment footprint small.",
        "Applied an application-support mindset to surface route and airport data clearly for quick visual scanning.",
        "Deployed and manage the stack directly on an AWS EC2 (Ubuntu) instance.",
      ],
      highlight:
        "AeroLogistics turns scattered global aviation data into a fast, explorable, map-driven experience — combining clean relational data modeling with practical full-stack deployment on AWS EC2.",
      challengeSummary:
        "Cross-referencing airlines, airports, and routes cleanly from raw CSV datasets.",
      solutionSummary:
        "Built a card-based explorer with Leaflet map visualization on top of a normalized PostgreSQL schema.",
    },
  },
  {
    slug: "campuskart",
    title: "CampusKart",
    description:
      "Campus-exclusive marketplace concept for Pace University students — a polished frontend MVP built as an 11-person capstone project, with backend and real-time features on an active roadmap.",
    tags: ["React", "TypeScript", "Student Marketplace", "Capstone Team Project"],
    liveLink: "/campuskart",
    githubLink: "https://github.com/CampusKart2/CampusKart",
    reportLink: "/Shlok_Shah_CampusKart_Report.pdf",
    caseStudy: {
      problem:
        "University students need a secure, verified, and community-driven marketplace to buy, sell, and exchange essential items without the risks associated with public platforms.",
      solution:
        "CampusKart is a campus-exclusive marketplace concept restricted to verified .edu users. The frontend MVP (9+ pages, trust & safety UI, smart filtering) is complete; the backend and real-time features are in active development as part of an 11-person senior capstone team at Pace University.",
      features: [
        "Marketplace homepage with deal-of-the-day, category browsing, and advanced search (frontend MVP)",
        "Persistent chat UI with localStorage-backed conversation state",
        "Price-bracket filters, wishlist/bookmarks, and smart badges (Hot Deal, Trending, New)",
        "Reviews, ratings, and campus-verification UI flows",
        "Responsive, mobile-first design with dark mode",
      ],
      techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      architecture:
        "The shipped frontend MVP is a React 18 + TypeScript (strict mode) app built with Vite and styled with Tailwind CSS and shadcn/ui, using localStorage to simulate persistence for listings, chat, and wishlists ahead of the real backend.",
      future:
        "The backend (Sprint 1+ on the team roadmap) will add Node.js/Express with Prisma and PostgreSQL, JWT-based .edu email verification, Socket.io-powered real-time chat, AWS S3/Cloudinary for image uploads, and SendGrid for email notifications.",
      challenges: [
        "Designing a full marketplace experience (browsing, chat, wishlist, reviews) before a real backend exists.",
        "Making mocked, localStorage-backed data feel convincingly real for demos and user testing.",
        "Coordinating frontend and backend work cleanly across an 11-person capstone team.",
        "Building trust-and-safety UI (campus verification, reviews, badges) that needs to plug into real auth later without a rewrite.",
        "Sequencing a realistic Sprint 1-4 roadmap so the backend, real-time chat, and deployment land incrementally.",
        "Keeping the UI production-quality (React 18, TypeScript strict mode, shadcn/ui) even while the data layer is still mocked.",
      ],
      solutions: [
        "Shipped a complete, polished frontend MVP (9+ pages) using React 18, TypeScript, Vite, and shadcn/ui.",
        "Used localStorage to simulate persistence for listings, chat, and wishlists ahead of the real backend.",
        "Structured the codebase (Frontend/ now, backend/ next) so the upcoming Express + Prisma + PostgreSQL API can slot in without reworking the UI.",
        "Designed campus-verification, reviews, and badge UI upfront so real .edu JWT auth can be wired in directly.",
        "Planned a clear Sprint 1-4 roadmap covering backend integration, Socket.io chat, image uploads, and deployment.",
        "Worked within an 11-person Pace University capstone team to divide frontend, backend, and design responsibilities.",
      ],
      highlight:
        "CampusKart's frontend MVP is production-quality and demo-ready while the backend follows a clear, sequenced roadmap — deliberate build ordering across an 11-person capstone team rather than a rushed full-stack build.",
      challengeSummary:
        "Designing a full marketplace experience before a real backend exists, without locking in decisions that would need a rewrite later.",
      solutionSummary:
        "Shipped a polished, localStorage-backed frontend MVP structured so the planned Express/Prisma backend can slot in directly.",
    },
  },
  {
    slug: "repopilot",
    title: "RepoPilot",
    description:
      "AI-powered repository scanner that accepts GitHub repositories or ZIP uploads, analyzes code, detects vulnerabilities, generates documentation, and creates developer-friendly reports.",
    tags: ["AI", "GitHub API", "Security", "Documentation", "Full Stack"],
    liveLink: "/repopilot",
    githubLink: "https://github.com/shlok695/Repopilot",
    reportLink: "/Shlok_Shah_RepoPilot_Report.pdf",
    caseStudy: {
      problem:
        "Developers and support teams often struggle to quickly understand unfamiliar repositories, identify security risks, and generate useful onboarding documentation for new team members.",
      solution:
        "RepoPilot is an advanced AI-assisted repo scanner that intelligently analyzes GitHub repositories or ZIP uploads to produce comprehensive structured insights, vulnerability reports, bug findings, and developer onboarding summaries, heavily influenced by secure code review thinking and support-friendly reporting.",
      features: [
        "Automated README and onboarding documentation generation",
        "Security scanning via npm audit, semgrep, and gitleaks",
        "Code quality analysis via eslint, ruff, and custom pattern detection",
        "Multi-language support for Node.js and Python projects",
        "License compliance checking, dependency inventory, and test coverage evaluation",
        "ZIP upload support for local, proprietary codebases alongside GitHub repo scanning",
      ],
      techStack: ["React", "TypeScript", "Vite", "Express.js", "Node.js", "Tailwind CSS"],
      architecture:
        "RepoPilot is built as a React 18 + TypeScript + Vite frontend talking to a Node.js/Express + TypeScript backend, with a modular middleware/agents layer that orchestrates the actual analysis (security scanning, code quality checks, doc generation) with per-agent timeout handling. It clones or unpacks the target repository, runs it through eslint/ruff/semgrep/gitleaks/npm audit, and produces a structured Markdown report. Originally built for the IBM Bob Hackathon, it's deployable via Docker Compose or exposed publicly through Tailscale Funnel.",
      security:
        "Uses temporary, short-lived tokens for GitHub access. ZIP uploads are scanned and immediately discarded after processing to ensure proprietary code is never retained on the server.",
      challenges: [
        "Supporting both GitHub repository input and ZIP upload input.",
        "Handling private repository restrictions properly without exposing confusing backend errors.",
        "Making sure users receive a clear message when a repository is private or inaccessible.",
        "Improving drag-and-drop upload behavior.",
        "Preventing sensitive files such as .env files from being exposed.",
        "Thinking through security risks because one weak component can become the weak link in an application.",
        "Making AI-generated documentation useful, structured, and readable.",
        "Detecting possible vulnerabilities while keeping the results actionable.",
        "Handling backend errors gracefully with user-friendly messages.",
        "Testing flows such as public repo scan, private repo handling, ZIP upload, drag-and-drop, report generation, and documentation output.",
        "Deploying the application securely on a self-hosted server with Tailscale Funnel and HTTPS.",
        "Balancing AI functionality with security, reliability, and user trust.",
      ],
      solutions: [
        "Built an AI-assisted repository analysis tool that helps users understand projects faster.",
        "Added support for both GitHub repository links and ZIP uploads.",
        "Improved error handling for private or inaccessible repositories.",
        "Added security-focused handling to avoid exposing sensitive files like .env files.",
        "Generated structured documentation and developer-friendly reports.",
        "Combined AI, cybersecurity awareness, testing, and secure deployment into one practical project.",
        "Hosted the application through a self-hosted setup using HTTPS and Tailscale Funnel.",
        "Treated security as a core feature, not an afterthought, reflecting a true application support mindset.",
      ],
      highlight:
        "RepoPilot combines AI, cybersecurity, documentation automation, testing, and secure deployment into one practical tool, emphasizing secure code review thinking and support-friendly reporting.",
      challengeSummary: "Supporting both GitHub repository input and ZIP upload input.",
      solutionSummary:
        "Built an AI-assisted repository analysis tool that helps users understand projects faster.",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function similarity(a: string, b: string): number {
  if (!a || !b) return 0;
  return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Guesses which project a mistyped or stale URL was probably trying to reach,
 * using the last path segment (so it works for both "/repoplit" and
 * "/projects/repoplit"). Used by the root not-found page.
 */
export function findClosestProject(pathname: string, threshold = 0.5): ProjectData | null {
  const segments = pathname.split("/").filter(Boolean);
  const target = normalize(segments[segments.length - 1] ?? "");
  if (!target) return null;

  let best: ProjectData | null = null;
  let bestScore = 0;

  for (const project of projects) {
    const candidates = [project.slug, normalize(project.title), ...project.tags.map(normalize)];
    for (const candidate of candidates) {
      if (!candidate) continue;
      let score = similarity(target, candidate);
      if (candidate.includes(target) || target.includes(candidate)) {
        score = Math.max(score, 0.75);
      }
      if (score > bestScore) {
        bestScore = score;
        best = project;
      }
    }
  }

  return bestScore >= threshold ? best : null;
}

/**
 * Identifies which live project a visitor most likely arrived from, using
 * document.referrer. Since each project is deployed on its own port/origin
 * behind the reverse proxy, the referring URL's host and path are a much
 * stronger signal than guessing from the (often generic) landing path — it
 * works whether the app shares this domain via path routing or has its own
 * origin entirely. Requires the referring app to send a normal referrer
 * (i.e. no `Referrer-Policy: no-referrer` on their end).
 */
export function findProjectByReferrer(referrer: string, currentHref?: string): ProjectData | null {
  if (!referrer) return null;

  let url: URL;
  try {
    url = new URL(referrer);
  } catch {
    return null;
  }

  if (currentHref && url.href === currentHref) return null;

  const haystack = normalize(url.hostname + url.pathname);

  for (const project of projects) {
    const candidates = [project.slug, normalize(project.title)];
    if (candidates.some((c) => c && haystack.includes(c))) {
      return project;
    }
  }

  return null;
}
