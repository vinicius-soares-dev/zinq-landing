import { Metadata } from 'next';
import GamificationClient from './GamificationClient';

export const metadata: Metadata = {
  title: 'Zinq | Gamificação e Metas',
  description: 'A sua equipe quer vencer. Dê-lhes o placar. O Zinq transforma cada atendimento rápido e tarefa entregue em pontos, rankings e recompensas reais.',
};

export default function GamificationFeaturePage() {
  return <GamificationClient />;
}