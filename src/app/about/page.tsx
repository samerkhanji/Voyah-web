import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About our Voyah dealership — premium electric vehicle sales and service.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">About us</h1>
        <p className="mt-6 text-lg text-slate-300">
          We are an authorised Voyah dealer, bringing premium electric vehicles to drivers who
          want performance, refinement and range without compromise.
        </p>
        <p className="mt-4 text-slate-400">
          From your first enquiry to long after you take delivery, our team is here to make the
          switch to electric effortless. We offer test drives, transparent guidance on the full
          Voyah range, and dedicated after-sales service.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Authorised dealer", body: "Genuine vehicles, factory warranty and certified technicians." },
            { title: "Test drive first", body: "Experience any model in the range before you decide." },
            { title: "Service & support", body: "Ongoing maintenance and charging guidance for the life of your car." },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
