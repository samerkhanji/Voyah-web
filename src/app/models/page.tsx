import type { Metadata } from "next";
import { models } from "@/lib/models";
import { ModelCard } from "@/components/model-card";

export const metadata: Metadata = {
  title: "Models",
  description: "Browse the full Voyah electric vehicle range — SUVs, sedans and MPVs.",
};

export default function ModelsPage() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white">The Voyah range</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        From the accessible Courage to the first-class Dream, every Voyah is built around a
        premium electric drivetrain, advanced driver assistance and a refined cabin.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </div>
    </div>
  );
}
