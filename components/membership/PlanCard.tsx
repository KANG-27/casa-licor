import type { Plan } from '@/lib/plans';

interface PlanCardProps {
  plan: Plan;
}

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(n);

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="w-full max-w-3xl mt-6 rounded-2xl border-2 border-[#E0B85C] bg-[#EDE0C4]/4 p-8">
      {/* Header: nombre + precio */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-semibold text-white mb-2">
            {plan.nombre}
          </h3>
          {plan.destacado && (
            <p className="text-[#E0B85C] text-sm">★ {plan.destacado}</p>
          )}
        </div>

        <div className="text-right">
          <p className="text-4xl font-semibold text-white">
            {formatCOP(plan.precio)}
            <span className="text-sm text-[#B8A882] font-normal">/mes</span>
          </p>
          <p className="text-xs text-[#B8A882] mt-1">
            ≈ {formatCOP(plan.precioPorCoctel)} por cóctel
            {plan.ahorro && ` · ahorras ${plan.ahorro}%`}
          </p>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-[#E0B85C]/20 pt-4">
        <p className="text-[#B8A882] text-sm mb-3">Que incluye</p>

        <ul className="grid grid-cols-2 gap-y-2 gap-x-6 mb-6">
          {plan.incluye.map((item) => (
            <li key={item} className="text-white text-sm flex gap-2">
              <span className="text-[#E0B85C]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button className="w-full py-3 rounded-lg bg-[#E0B85C] text-[#2B1512] font-medium hover:bg-[#D9A441] transition">
        Suscribirme a este plan
      </button>
    </div>
  );
}