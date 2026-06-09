import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModel, models } from "@/lib/models";
import { inventory } from "@/lib/inventory";
import { LeadForm } from "@/components/lead-form";

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = getModel(params.slug);
  if (!model) return { title: "Model not found" };
  return { title: model.name, description: model.description };
}

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const model = getModel(params.slug);
  if (!model) notFound();

  const availableUnits = inventory.filter((u) => u.modelSlug === model.slug);

  const specs = [
    { label: "Body style", value: model.bodyStyle },
    { label: "Powertrain", value: model.powertrain },
    { label: "Range", value: `${model.rangeKm} km` },
    { label: "0–100 km/h", value: model.zeroToHundred },
    { label: "Power", value: `${model.powerHp} hp` },
    { label: "Seats", value: String(model.seats) },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="container-page grid gap-8 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Link href="/models" className="text-sm text-slate-400 hover:text-white">
              ← All models
            </Link>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{model.name}</h1>
            <p className="mt-3 text-lg text-slate-300">{model.tagline}</p>
            <p className="mt-6 max-w-lg text-slate-400">{model.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-xl font-semibold text-white">{model.startingPrice}</span>
              <Link href="/contact" className="btn-primary">Book a test drive</Link>
            </div>
          </div>
          <div className="card flex h-64 items-center justify-center lg:h-80">
            <span className="text-4xl font-bold tracking-[0.4em] text-slate-700">
              {model.name.replace("Voyah ", "").toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* Specs + highlights */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Specifications</h2>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="card p-5">
                <dt className="text-sm text-slate-400">{spec.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Highlights</h2>
          <ul className="mt-6 space-y-3">
            {model.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1 text-accent-soft">◆</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inventory for this model */}
      {availableUnits.length > 0 && (
        <section className="border-t border-slate-800 bg-surface/30">
          <div className="container-page py-16">
            <h2 className="text-2xl font-bold text-white">In our showroom now</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {availableUnits.map((unit) => (
                <div key={unit.id} className="card p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{unit.trim}</span>
                    <StatusBadge status={unit.status} />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    {unit.year} · {unit.exteriorColor} / {unit.interiorColor}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Ref {unit.id}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead form */}
      <section className="border-t border-slate-800">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-white">Enquire about the {model.name}</h2>
            <p className="mt-3 max-w-md text-slate-400">
              Leave your details and our team will get back to you to arrange a test drive or
              answer any questions.
            </p>
          </div>
          <div className="card p-6">
            <LeadForm defaultModel={model.name} />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Available: "bg-emerald-500/15 text-emerald-400",
    "In transit": "bg-amber-500/15 text-amber-400",
    Reserved: "bg-slate-500/15 text-slate-300",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] ?? ""}`}>
      {status}
    </span>
  );
}
