import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-ink">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-lg font-bold tracking-[0.3em] text-white">VOYAH</div>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Premium electric vehicles. Authorised dealer — sales, test drives and service.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/models" className="hover:text-white">Models</Link></li>
            <li><Link href="/inventory" className="hover:text-white">Inventory</Link></li>
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/contact" className="hover:text-white">Book a test drive</Link></li>
            <li><a href="mailto:sales@voyah-dealer.com" className="hover:text-white">sales@voyah-dealer.com</a></li>
            <li><a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Showroom</h3>
          <p className="mt-3 text-sm text-slate-400">
            123 Electric Avenue<br />
            Open Mon–Sat, 9:00–18:00
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Voyah Dealer. All rights reserved.</p>
          <p>Specifications shown are indicative and may vary by market.</p>
        </div>
      </div>
    </footer>
  );
}
