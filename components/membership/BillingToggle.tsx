import type { BillingPeriod } from '@/lib/plans';

interface BillingToggleProps {
  selected: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

const options: { id: BillingPeriod; label: string }[] = [
  { id: 'mensual', label: 'Mensual' },
  { id: 'quincenal', label: 'Quincenal' },
  { id: 'anual', label: 'Anual' },
];

export default function BillingToogle({selected, onChange}:BillingToggleProps){

    return(
        <div className="flex gap-2 bg-[#3D2419] rounded-full p-2 w-full max-w-3xl">
            {options.map((opt) => (
                <button
                key={opt.id}
                onClick={() => onChange(opt.id)}
                className={`flex-1 py-3 rounded-full transition ${
                    selected === opt.id
                    ? 'bg-[#E0B85C] text-[#2B1512] font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
                >
                {opt.label}
                </button>
            ))}
        </div>
    )
}