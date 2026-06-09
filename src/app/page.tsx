import Link from "next/link";
import { models } from "@/lib/models";
import { ModelCard } from "@/components/model-card";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-ink to-ink" />
        <div className="container-page relative grid gap-8 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-soft">
              Premium electric mobility
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Drive the future, today.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Discover the full Voyah range of electric SUVs, sedans and MPVs. Browse live
              showroom inventory and book a test drive at your local authorised dealer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/models" className="btn-primary">Explore the range</Link>
              <Link href="/contact" className="btn-ghost">Book a test drive</Link>
            </div>
          </div>
          <div className="card flex h-64 items-center justify-center lg:h-80">
            <span className="text-5xl font-bold tracking-[0.4em] text-slate-700">VOYAH</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-800">
        <div className="container-page grid grid-cols-2 gap-6 py-12 text-center md:grid-cols-4">
          {[
            { value: "4", label: "Models in range" },
            { value: "680 km", label: "Max electric range" },
            { value: "4.0s", label: "0–100 km/h" },
            { value: "800V", label: "Fast-charge ready" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Models */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">The range</h2>
            <p className="mt-2 text-slate-400">Four ways to go electric, without compromise.</p>
          </div>
          <Link href="/models" className="hidden text-sm font-semibold text-accent-soft hover:underline sm:block">
            View all models →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-surface/40">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready for a closer look?</h2>
          <p className="max-w-xl text-slate-400">
            Book a no-obligation test drive and experience Voyah for yourself. Our team will
            help you find the model and configuration that fits your life.
          </p>
          <Link href="/contact" className="btn-primary">Book a test drive</Link>
        </div>
      </section>
    </>
  );
}
