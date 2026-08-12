import { CreditCard, Package, Wine, type LucideIcon } from 'lucide-react';

export interface Step {
    numero: number;
    icono: LucideIcon;
    titulo: string;
    descripcion: string;
}
export const steps: Step[] =[
    {
        numero: 1,
        icono: CreditCard,
        titulo: 'Elige tu plan',
        descripcion: 'Escoge la suscripción que más te guste y realiza tu pago seguro.',
    },
    {
        numero: 2,
        icono: Package,
        titulo: 'Recibe tu kit',
        descripcion: 'Te llega a casa en nuestras fechas fijas: el 15 o el 30 de cada mes.',
    },
    {
        numero: 3,
        icono: Wine,
        titulo: 'Prepáralo y disfruta',
        descripcion: 'Arma tus cócteles en casa siguiendo nuestras recetas paso a paso.',
    },
]