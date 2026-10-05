"use client";
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
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

  // Motion's scroll value only triggers a render when the threshold is actually crossed.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  // Active section: an IntersectionObserver band just under the navbar, instead of measuring on every scroll frame.
  useEffect(() => {
    const ids = Array.from(new Set(links.map((l) => l.href.split('#')[1]).filter(Boolean))) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

    // Measure only when a section crosses the band, not on every scroll frame.
    const pick = () => {
      const current = sections.filter((sec) => sec.getBoundingClientRect().top <= 140).pop();
      setActiveHash(current ? current.id : "");
    };
    pick();

    const observer = new IntersectionObserver(pick, { rootMargin: "-140px 0px -55% 0px", threshold: [0, 1] });
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
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
        "fixed top-0 w-full z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(3,2,10,0.35)]"
          : "bg-background/20 backdrop-blur-md border-transparent"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-foreground font-semibold group">
          <Terminal aria-hidden="true" className="w-5 h-5 text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />
          <span className="tracking-wide">Shlok Shah</span>
        </Link>

        <div className="hidden md:flex gap-7 text-sm font-medium">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
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
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full"
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
          className="md:hidden -mr-2.5 p-3 text-gray-300 hover:text-white transition-colors"
        >
          {mobileOpen ? <X aria-hidden="true" className="w-5 h-5" /> : <Menu aria-hidden="true" className="w-5 h-5" />}
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
