import { Metadata } from 'next';
import RoletasClient from './RoletasClient';

export const metadata: Metadata = {
  title: 'Zinq | Roletas de Distribuição de Leads',
  description: 'O fim do favoritismo. O Zinq mapeia quem está livre, analisa habilidades e distribui leads automaticamente sem intervenção humana.',
};

export default function RoletasFeaturePage() {
  return <RoletasClient />;
}