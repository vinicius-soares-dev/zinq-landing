import { Metadata } from 'next';
import ClinicasClient from './ClinicasClient';

export const metadata: Metadata = {
  title: 'Zinq para Clínicas | Fim das Faltas e Recepção Automática',
  description: 'Zere os "no-shows" com a Taxa de Sinal Inteligente. A IA do Zinq atende pacientes, faz a triagem e agenda consultas particulares 24h por dia.',
  keywords: ['software para clínicas', 'agenda médica online', 'taxa anti-calote', 'triagem com inteligência artificial', 'zinq clínicas', 'software para odontologia'],
};

export default function ClinicasPage() {
  return <ClinicasClient />;
}