import type { Metadata } from "next";
import Link from "next/link";
import { inventory } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Live Voyah showroom inventory — available, in-transit and reserved vehicles.",
};

export default function InventoryPage() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white">Showroom inventory</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Vehicles currently available or arriving soon. Reserve a unit or book a viewing —
        stock is updated regularly.
      </p>

      {/* Table (md+) */}
      <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-800 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Model</th>
              <th className="px-5 py-3 font-medium">Trim</th>
              <th className="px-5 py-3 font-medium">Year</th>
              <th className="px-5 py-3 font-medium">Colour</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {inventory.map((unit) => (
              <tr key={unit.id} className="text-slate-200">
                <td className="px-5 py-4 font-medium">{unit.modelName}</td>
                <td className="px-5 py-4 text-slate-400">{unit.trim}</td>
                <td className="px-5 py-4 text-slate-400">{unit.year}</td>
                <td className="px-5 py-4 text-slate-400">
                  {unit.exteriorColor} / {unit.interiorColor}
                </td>
                <td className="px-5 py-4"><StatusBadge status={unit.status} /></td>
                <td className="px-5 py-4 text-right">
                  <Link href="/contact" className="text-sm font-semibold text-accent-soft hover:underline">
                    Enquire
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (mobile) */}
      <div className="mt-10 grid gap-4 md:hidden">
        {inventory.map((unit) => (
          <div key={unit.id} className="card p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">{unit.modelName}</span>
              <StatusBadge status={unit.status} />
            </div>
            <p className="mt-1 text-sm text-slate-400">{unit.trim} · {unit.year}</p>
            <p className="mt-1 text-sm text-slate-400">
              {unit.exteriorColor} / {unit.interiorColor}
            </p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-accent-soft hover:underline">
              Enquire →
            </Link>
          </div>
        ))}
      </div>
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
