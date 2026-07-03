"use client";
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { appleEase } from '@/components/ui/AppleAnimations';

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Infrastructure", href: "/#infrastructure" },
  { name: "About", href: "/home#about" },
  { name: "Skills", href: "/home#skills" },
  { name: "Experience", href: "/home#experience" },
  { name: "Contact", href: "/home#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = Array.from(new Set(links.map((l) => l.href.split('#')[1]).filter(Boolean))) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

    const onScroll = () => {
      let current = "";
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= 140) current = sec.id;
      }
      setActiveHash(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    const [base, hash] = href.split('#');
    const baseNormalized = base || '/';
    const onThisPage =
      pathname === baseNormalized ||
      (baseNormalized === '/' && pathname.startsWith('/projects'));

    if (!onThisPage) return false;
    return hash ? activeHash === hash : !activeHash;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-background/20 backdrop-blur-md border-transparent"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-foreground font-semibold group">
          <Terminal className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 group-hover:rotate-6 transition-all duration-300" />
          <span className="tracking-wide">Shlok Shah</span>
        </Link>

        <div className="hidden md:flex gap-7 text-sm font-medium">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-2 transition-colors duration-300 hover:text-white",
                  isActive ? "text-white" : "text-gray-400"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ duration: 0.5, ease: appleEase }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(0,225,255,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 -mr-2 text-gray-300 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: appleEase }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-background/90 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-3 text-base font-medium border-b border-white/5 last:border-b-0 transition-colors",
                      isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
