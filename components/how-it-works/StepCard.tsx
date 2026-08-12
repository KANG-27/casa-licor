import type { Step } from '@/lib/steps'

interface StepCardProps {
    step: Step;
}

export default function StepCard({ step }: StepCardProps){
    const Icon = step.icono
    return(
    <div className="relative rounded-2xl border-2 border-[#E0B85C] w-70 bg-[#EDE0C4]/4 flex flex-col items-center p-10 pt-14 text-center gap-2">
        <div className="absolute -top-6 bg-[#E0B85C] rounded-full w-13 h-13 flex justify-center items-center text-[#2B1512] text-[25px]">
            {step.numero}
        </div>
        <div className="bg-[#E0B85C]/12 p-5 mb-3 rounded-2xl">
            <Icon size={40} className="text-[#D9A441]" />
        </div>
        <span className="text-lg">{step.titulo}</span>
        <span className="text-[#B8A882] text-sm">{step.descripcion}</span>
    </div>
    )
}