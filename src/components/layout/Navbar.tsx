"use client";
import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground font-semibold">
          <Terminal className="w-5 h-5 text-gray-300" />
          <span>Shlok Shah</span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Project Hub</Link>
          <Link href="/home" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/report" className="hover:text-white transition-colors">Reports</Link>
          <Link href="/home#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
