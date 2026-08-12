import { ChevronsRight } from 'lucide-react';
import { steps } from '@/lib/steps';
import StepCard from './StepCard';

export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center mt-7">
      <p className="text-[#D9A441]">Fácil y rápido</p>
      <h2 className="text-3xl font-semibold">Cómo funciona</h2>

      <div className="flex justify-center items-center gap-6 mt-12">
        {steps.map((step, i) => (
          <div key={step.numero} className="flex items-center gap-6">
            <StepCard step={step} />
            {i < steps.length - 1 && (
              <ChevronsRight className="text-[#D9A441]" size={40} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}