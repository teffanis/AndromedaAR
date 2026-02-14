"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  businessType: string;
  monthlyBudget: string;
  objective: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  businessType: "",
  monthlyBudget: "",
  objective: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setMessage("Solicitud enviada. Te contactaremos en menos de 24 horas.");
      setForm(initialState);
    } catch {
      setMessage("Hubo un error al enviar. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-gray-800 bg-gray-900/70 p-6">
      <h3 className="text-xl font-semibold">Agenda diagnóstico gratis</h3>
      <p className="text-sm text-gray-300">Recibe un plan de monetización digital para tu negocio.</p>

      <input
        required
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        placeholder="Nombre"
        className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-orange-500 focus:outline-none"
      />
      <input
        required
        type="email"
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        placeholder="Correo"
        className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-orange-500 focus:outline-none"
      />
      <input
        required
        value={form.businessType}
        onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
        placeholder="Tipo de negocio"
        className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-orange-500 focus:outline-none"
      />
      <select
        required
        value={form.monthlyBudget}
        onChange={(event) => setForm((prev) => ({ ...prev, monthlyBudget: event.target.value }))}
        className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-gray-100 focus:border-orange-500 focus:outline-none"
      >
        <option value="">Presupuesto mensual</option>
        <option value="500-1000">USD 500 - 1000</option>
        <option value="1000-3000">USD 1000 - 3000</option>
        <option value="3000+">USD 3000+</option>
      </select>
      <textarea
        required
        rows={4}
        value={form.objective}
        onChange={(event) => setForm((prev) => ({ ...prev, objective: event.target.value }))}
        placeholder="Objetivo principal (ventas, leads, automatización, etc.)"
        className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-orange-500 focus:outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Quiero escalar mi negocio"}
      </button>

      {message ? <p className="text-sm text-orange-300">{message}</p> : null}
    </form>
  );
}
