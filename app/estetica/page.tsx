import { Metadata } from 'next';
import EsteticaClient from './EsteticaClient';

export const metadata: Metadata = {
  title: 'Zinq para Estética e Beleza | Agendamento IA e Taxa de Sinal',
  description: 'Acabe com os horários vagos. O Zinq cobra taxa de sinal automática, agenda pacientes 24h e organiza sua clínica de estética com elegância.',
  keywords: ['software para estética', 'sistema para salão de beleza', 'agendamento online estética', 'taxa de sinal', 'zinq estética', 'triagem com ia'],
};

export default function EsteticaPage() {
  return <EsteticaClient />;
}