export type BillingPeriod = 'mensual' | 'quincenal' | 'anual';

export interface Plan {
  id: BillingPeriod;
  nombre: string;
  precio: number;
  precioPorCoctel: number;
  ahorro?: number;
  destacado?: string;
  incluye: string[];
}

export const plans: Plan[] = [
  {
    id: 'mensual',
    nombre: 'Plan Mensual',
    precio: 89900,
    precioPorCoctel: 4495,
    ahorro: 10,
    incluye: [
      '20 cócteles al mes',
      'Envío incluido',
      'Acceso a recetas exclusivas',
      'Soporte prioritario',
    ],
  },
  {
    id: 'quincenal',
    nombre: 'Plan Quincenal',
    precio: 49900,
    precioPorCoctel: 4990,
    destacado: 'Más popular',
    incluye: [
      '10 cócteles cada 15 días',
      'Envío incluido',
      'Acceso a recetas exclusivas',
    ],
  },
  {
    id: 'anual',
    nombre: 'Plan Anual',
    precio: 899900,
    precioPorCoctel: 4166,
    ahorro: 25,
    destacado: 'Mejor valor',
    incluye: [
      '240 cócteles al año',
      'Envío incluido',
      'Acceso a recetas exclusivas',
      'Soporte prioritario',
      'Descuentos especiales',
      'Regalo sorpresa cada trimestre',
    ],
  },
];
