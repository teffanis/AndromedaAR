"use client";

interface OfferCardProps {
  title: string;
  detail: string;
  price: string;
  onClick: () => void;
}

export default function OfferCard({ title, detail, price, onClick }: OfferCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-gray-800 bg-gray-900/40 p-5 transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-orange-500/20"
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-orange-400">{title}</h3>
        <p className="text-sm text-gray-300">{detail}</p>
        <p className="font-medium text-orange-400">{price}</p>
      </div>
      <div className="mt-4 inline-flex items-center text-sm text-orange-500 opacity-0 transition group-hover:opacity-100">
        Ver detalles
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}
