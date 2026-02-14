"use client";

import { useState } from "react";
import LeadForm from "@/components/LeadForm";
import Modal from "@/components/Modal";
import OfferCard from "@/components/OfferCard";

const offers = [
  {
    id: 1,
    title: "Sistema de ventas automatizado",
    detail: "Embudo, CRM y seguimiento por WhatsApp para aumentar cierres.",
    price: "Desde USD 900",
    description:
      "Un sistema completo de automatización de ventas que captura leads, los segmenta y realiza seguimiento automático para aumentar tu tasa de cierre.",
    benefits: [
      "Captura automática de leads desde múltiples canales",
      "CRM integrado con historial y tareas automáticas",
      "Seguimiento por WhatsApp Business API",
      "Reportes de performance en tiempo real",
      "Integración con métodos de pago",
      "Pipeline visual y automatizado",
    ],
    included: [
      "Setup y configuración del embudo",
      "Integración WhatsApp Business",
      "3 meses de soporte técnico",
      "Capacitación del equipo",
      "Templates de mensajes optimizados",
    ],
    timeline: [
      "Día 1-2: Diagnóstico y setup inicial",
      "Día 3-5: Integración de canales de captación",
      "Día 6-10: Configuración de automatizaciones",
      "Día 11-14: Testing y capacitación",
    ],
    roi: [
      "Promedio +40% en conversión",
      "Reducción 60% en tiempo de seguimiento",
      "ROI en 3-4 meses",
      "Escalable a múltiples equipos",
    ],
  },
  {
    id: 2,
    title: "Implementación IA para negocio",
    detail: "Asistentes, automatizaciones internas y reporting inteligente.",
    price: "Desde USD 1,500",
    description:
      "Implementación de inteligencia artificial aplicada directamente a tus procesos de negocio: atención al cliente, análisis de datos y toma de decisiones.",
    benefits: [
      "Asistente IA para atención al cliente 24/7",
      "Automatización de procesos internos",
      "Análisis predictivo de datos",
      "Reportes inteligentes automáticos",
      "Reconocimiento de patrones de negocio",
      "Optimización de precios y ofertas",
    ],
    included: [
      "Auditoría de procesos actuales",
      "Entrenamiento de modelos con tus datos",
      "Setup de chatbot IA",
      "Dashboard de analytics avanzado",
      "6 meses de soporte y mejora continua",
    ],
    timeline: [
      "Día 1-3: Análisis de datos existentes",
      "Día 4-8: Entrenamiento de modelos IA",
      "Día 9-12: Deploy e integración",
      "Día 13-14: Testing y optimización",
    ],
    roi: [
      "Automatización 70% de tareas repetitivas",
      "+50% en eficiencia operativa",
      "Insights accionables en tiempo real",
      "ROI en 4-6 meses",
    ],
  },
  {
    id: 3,
    title: "Growth website + performance",
    detail: "Sitio enfocado en conversión + analítica + optimización continua.",
    price: "Desde USD 700",
    description:
      "Desarrollo de un sitio web optimizado específicamente para convertir visitantes en clientes, con análisis profundo y mejora continua.",
    benefits: [
      "Diseño enfocado en psicología de conversión",
      "Optimización SEO on-page y técnica",
      "Tests A/B automáticos de landing",
      "Integración con herramientas de marketing",
      "Análisis heatmap y comportamiento de usuarios",
      "Performance ultra rápido (Core Web Vitals)",
    ],
    included: [
      "Diseño y desarrollo responsive",
      "Setup de Google Analytics 4 avanzado",
      "Formularios de captación optimizados",
      "Optimización de velocidad",
      "3 meses de optimización post-launch",
      "Documentación y capacitación",
    ],
    timeline: [
      "Día 1-2: Estrategia y wireframes",
      "Día 3-8: Diseño y desarrollo",
      "Día 9-11: Integración y testing",
      "Día 12-14: Deploy y optimización",
    ],
    roi: [
      "+35% tasa de conversión promedio",
      "Reduce bounce rate entre 30-50%",
      "Mejora posicionamiento SEO",
      "ROI en 2-3 meses",
    ],
  },
];

export default function HomePage() {
  const [selectedOffer, setSelectedOffer] = useState<(typeof offers)[0] | null>(null);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-14">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <p className="inline-block rounded-full border border-orange-400/40 bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-widest text-orange-300">
            Andromeda AR
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Convertimos tu negocio en una máquina de ingresos digitales
          </h1>
          <p className="max-w-xl text-lg text-gray-300">
            Diseñado para emprendedores y pymes que quieren vender más con automatización, IA aplicada y activos digitales escalables.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
              <p className="text-2xl font-semibold text-orange-400">+35%</p>
              <p className="text-sm text-gray-300">más conversión promedio</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
              <p className="text-2xl font-semibold text-orange-400">14 días</p>
              <p className="text-sm text-gray-300">para lanzar tu sistema</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
              <p className="text-2xl font-semibold text-orange-400">ROI</p>
              <p className="text-sm text-gray-300">enfocado a resultados</p>
            </div>
          </div>
        </div>

        <LeadForm />
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold">Ofertas rentables para facturar desde el primer mes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              detail={offer.detail}
              price={offer.price}
              onClick={() => setSelectedOffer(offer)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={!!selectedOffer}
        onClose={() => setSelectedOffer(null)}
        title={selectedOffer?.title || ""}
      >
        {selectedOffer && (
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <p className="text-lg font-semibold text-orange-400">{selectedOffer.price}</p>
              <p className="mt-2 text-gray-300">{selectedOffer.description}</p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg className="mr-2 h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Beneficios principales
              </h3>
              <ul className="space-y-2">
                {selectedOffer.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="mr-2 text-orange-400">→</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg className="mr-2 h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm12 4H4v4h12V8z" clipRule="evenodd" />
                </svg>
                Qué está incluido
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedOffer.included.map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-sm text-gray-300">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg className="mr-2 h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Timeline de implementación (14 días)
              </h3>
              <div className="space-y-2">
                {selectedOffer.timeline.map((step, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-300">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                      {idx + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg className="mr-2 h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h.01a1 1 0 110 2H12zm-2 2a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm2-4a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                ROI estimado
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedOffer.roi.map((metric, idx) => (
                  <div key={idx} className="rounded-lg border border-orange-900/30 bg-orange-950/20 p-3 text-sm text-orange-300">
                    📈 {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}
