import Link from "next/link";

const links = [
  { href: "/models", label: "Models" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-ink/80 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-[0.3em] text-white">
          VOYAH
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-primary text-xs">
          Book a test drive
        </Link>
      </nav>
    </header>
  );
}
