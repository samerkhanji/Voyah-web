import Link from "next/link";
import type { Model } from "@/lib/models";

export function ModelCard({ model }: { model: Model }) {
  return (
    <Link
      href={`/models/${model.slug}`}
      className="card group flex flex-col overflow-hidden transition-colors hover:border-slate-600"
    >
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-800 to-surface">
        <span className="text-2xl font-bold tracking-widest text-slate-600 transition-colors group-hover:text-slate-400">
          {model.name.replace("Voyah ", "").toUpperCase()}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{model.name}</h3>
        <p className="mt-1 text-sm text-slate-400">{model.tagline}</p>
        <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-400">
          <div>
            <dt className="text-slate-500">Range</dt>
            <dd className="font-semibold text-slate-200">{model.rangeKm} km</dd>
          </div>
          <div>
            <dt className="text-slate-500">0–100</dt>
            <dd className="font-semibold text-slate-200">{model.zeroToHundred}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Power</dt>
            <dd className="font-semibold text-slate-200">{model.powerHp} hp</dd>
          </div>
        </dl>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-300">{model.startingPrice}</span>
          <span className="text-sm font-semibold text-accent-soft group-hover:underline">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
