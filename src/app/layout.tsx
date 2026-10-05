import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIBackground } from "@/components/ui/AIBackground";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MotionProvider } from "@/components/layout/MotionProvider";

export const metadata: Metadata = {
  title: "Shlok's Project Hub",
  description: "Explore live applications, technical reports, and self-hosted projects from Shlok Shah, a DevOps engineer building toward Cloud and Platform Engineering with AWS, Kubernetes, Terraform, and GitOps.",
};

export const viewport: Viewport = {
  themeColor: "#07060f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col relative text-foreground bg-background">
        <MotionProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <AIBackground />
          <ScrollProgress />
          <Navbar />
          <main id="main" className="flex-1 pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
