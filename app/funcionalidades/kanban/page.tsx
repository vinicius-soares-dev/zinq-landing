import { Metadata } from 'next';
import KanbanClient from './KanbanClient';

export const metadata: Metadata = {
  title: 'Zinq | Kanban e Distribuição Automática',
  description: 'Acompanhe projetos, delegue tarefas com um clique e deixe as nossas Roletas Inteligentes distribuírem o trabalho automaticamente pela equipe.',
};

export default function KanbanFeaturePage() {
  return <KanbanClient />;
}