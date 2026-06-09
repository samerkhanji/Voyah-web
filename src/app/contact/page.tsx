import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact & test drive",
  description: "Book a Voyah test drive or get in touch with our sales team.",
};

export default function ContactPage() {
  return (
    <div className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-start">
      <div>
        <h1 className="text-4xl font-bold text-white">Book a test drive</h1>
        <p className="mt-4 text-slate-300">
          Tell us a little about what you&apos;re looking for and our team will be in touch to
          arrange a test drive or answer your questions.
        </p>

        <div className="mt-10 space-y-6 text-sm">
          <ContactRow label="Email" value="sales@voyah-dealer.com" href="mailto:sales@voyah-dealer.com" />
          <ContactRow label="Phone" value="+1 (000) 000-0000" href="tel:+10000000000" />
          <ContactRow label="Showroom" value="123 Electric Avenue · Open Mon–Sat, 9:00–18:00" />
        </div>
      </div>

      <div className="card p-6 sm:p-8">
        <LeadForm />
      </div>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <div className="text-slate-500">{label}</div>
      {href ? (
        <a href={href} className="text-slate-200 hover:text-white">{value}</a>
      ) : (
        <div className="text-slate-200">{value}</div>
      )}
    </div>
  );
}
