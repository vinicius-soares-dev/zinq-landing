import { Metadata } from 'next';
import VendasClient from './VendasClient';

export const metadata: Metadata = {
  title: 'Zinq para Equipes de Vendas | CRM, Roleta e Gamificação',
  description: 'Acelere seu tempo de resposta. Distribua leads automaticamente para seus SDRs e Closers, gamifique sua operação e não perca vendas por lentidão no WhatsApp.',
  keywords: ['software para equipe de vendas', 'crm de vendas', 'roleta de leads', 'gamificação de vendas', 'zinq vendas', 'gestão de sdrs'],
};

export default function VendasPage() {
  return <VendasClient />;
}