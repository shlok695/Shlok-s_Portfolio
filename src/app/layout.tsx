import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIBackground } from "@/components/ui/AIBackground";

export const metadata: Metadata = {
  title: "Shlok's Project Hub",
  description: "Explore live applications, technical reports, and self-hosted projects built with AI, cybersecurity, DevOps, and full-stack engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col relative text-foreground bg-background">
        <AIBackground />
        <Navbar />
        <main className="flex-1 pt-24 pb-12 w-full max-w-7xl mx-auto px-6 z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
