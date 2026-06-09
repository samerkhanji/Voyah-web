"use client";

import { useState } from "react";
import { models } from "@/lib/models";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({ defaultModel }: { defaultModel?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Request failed");
      }
      setStatus("success");
      setMessage("Thanks! A member of our team will be in touch shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required placeholder="jane@email.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 555 123 4567" />
        <div className="space-y-1">
          <label htmlFor="model" className="text-sm font-medium text-slate-300">
            Model of interest
          </label>
          <select
            id="model"
            name="model"
            defaultValue={defaultModel ?? ""}
            className="w-full rounded-lg border border-slate-700 bg-ink px-3 py-2 text-sm text-slate-100 outline-none focus:border-accent"
          >
            <option value="">No preference</option>
            {models.map((m) => (
              <option key={m.slug} value={m.name}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="I'd like to book a test drive this weekend…"
          className="w-full rounded-lg border border-slate-700 bg-ink px-3 py-2 text-sm text-slate-100 outline-none focus:border-accent"
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Request a callback"}
      </button>

      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-accent-soft"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-700 bg-ink px-3 py-2 text-sm text-slate-100 outline-none focus:border-accent"
      />
    </div>
  );
}
