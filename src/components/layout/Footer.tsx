import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12 text-center text-sm text-muted-foreground glass-card">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Shlok Shah. Built on a self-hosted server.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-colors">Project Hub</Link>
          <Link href="/home" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/report" className="hover:text-white transition-colors">Reports</Link>
        </div>
      </div>
    </footer>
  );
}
