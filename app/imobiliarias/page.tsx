import { Metadata } from 'next';
import ImobiliariasClient from './ImobiliariasClient';

export const metadata: Metadata = {
  title: 'Zinq para Imobiliárias | Gestão de Leads e Corretores',
  description: 'Automatize a roleta de corretores, atenda clientes 24h com Inteligência Artificial e não perca mais nenhuma venda de imóvel por demora no WhatsApp.',
  keywords: ['crm para imobiliárias', 'roleta de corretores', 'sistema para corretores', 'atendimento imobiliário ia', 'zinq imobiliárias'],
};

export default function ImobiliariasPage() {
  return <ImobiliariasClient />;
}