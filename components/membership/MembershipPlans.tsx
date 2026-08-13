'use client';

import { useState } from 'react';
import { plans, type BillingPeriod } from '@/lib/plans';
import BillingToggle from './BillingToggle';
import PlanCard from './PlanCard';

export default function MembershipPlans() {
  const [selected, setSelected] = useState<BillingPeriod>('quincenal');
  const currentPlan = plans.find((p) => p.id === selected)!;

  return (
    <section className="flex flex-col items-center mt-15">
      <p className="text-[#D9A441]">✦ Membresías Tres Gatos ✦</p>
      <h2 className="text-3xl font-semibold mb-8">Elige tu plan</h2>

      <BillingToggle selected={selected} onChange={setSelected} />
      <PlanCard plan={currentPlan} />
    </section>
  );
}