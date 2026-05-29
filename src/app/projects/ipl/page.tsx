import { CaseStudy } from "@/components/ui/CaseStudy";

export default function IPLCaseStudy() {
  return (
    <CaseStudy
      title="Fantasy IPL Dashboard"
      problem="Families and friend groups need a customized, private platform to conduct real-time IPL player auctions and manage their own fantasy leagues with automated Dream11-style points calculation."
      solution="A full-stack, real-time Fantasy IPL application designed specifically for private leagues. It features a live interactive auction room, custom franchise management, and a robust automated points calculation engine."
      features={[
        "Live auction workflows for player bidding, budget tracking, and roster management",
        "Custom fantasy points engine with Dream11-style scoring and captain/vice-captain multipliers",
        "Automated live match syncing and score updates through external cricket REST APIs",
        "Scheduled background Docker worker jobs for continuous data aggregation",
        "Secure franchise login and admin controls",
        "Dynamic real-time team leaderboard calculations and top-performer tracking"
      ]}
      techStack={["Next.js", "TypeScript", "Prisma", "SQLite", "NextAuth", "Docker", "Tailwind CSS"]}
      architecture="The application uses a Next.js and TypeScript frontend integrated with a Prisma ORM mapping to an SQLite database. Real-time updates and live auction events are managed efficiently, while background Docker worker jobs routinely fetch external cricket REST APIs to automate score syncing and points calculation without manual intervention."
      liveLink="https://svps.tail00dff0.ts.net/ipl"
      challenges={[
        "Organizing IPL-related information in a way that is easy to explore.",
        "Presenting teams, matches, statistics, or insights without making the interface cluttered.",
        "Designing a dashboard or data-driven interface with clear visual hierarchy.",
        "Handling different types of sports data such as teams, players, matches, scores, or performance metrics.",
        "Making the application interesting for both casual viewers and users looking for insights.",
        "Testing data accuracy, filtering, navigation, and responsiveness.",
        "Managing edge cases such as missing data, inconsistent data, or confusing display formats.",
        "Making the project useful as a demonstration of data presentation and user-focused design."
      ]}
      solutions={[
        "Built an interactive cricket-focused project around IPL data and insights.",
        "Converted sports information into a clean and engaging user experience.",
        "Designed the project to demonstrate data presentation, dashboard thinking, and user-focused design.",
        "Applied testing practices to validate data display, navigation, UI behavior, and responsiveness.",
        "Made the project accessible for both technical reviewers and general users.",
        "Created a project that turns a familiar real-world topic into a structured software experience."
      ]}
      highlight="IPL transforms sports data into a clean, interactive, and user-friendly experience instead of simply displaying static information."
    />
  );
}
