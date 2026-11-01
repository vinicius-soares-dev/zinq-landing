import { Metadata } from 'next';
import B2BClient from './B2BClient';

export const metadata: Metadata = {
  title: 'Zinq para Escritórios B2B | Gestão, Processos e CRM',
  description: 'Centralize a comunicação com o Z-Teams, automatize a triagem de leads High-Ticket e controle cada etapa do seu ciclo de vendas em um único lugar.',
  keywords: ['software para escritórios', 'crm b2b', 'gestão de agências', 'z-teams comunicação', 'kanban b2b', 'zinq empresas'],
};

export default function B2BPage() {
  return <B2BClient />;
}