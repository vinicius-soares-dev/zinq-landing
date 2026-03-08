import { Metadata } from 'next';
import ChatClient from './ChatClient';

// 🎯 SEO Nativo e estático
export const metadata: Metadata = {
  title: 'Zinq | Z-Teams (Comunicação Interna)',
  description: 'Crie canais por projeto, converse em tempo real e mantenha a sua equipe focada num ambiente corporativo integrado ao seu sistema de gestão.',
};

export default function ChatFeaturePage() {
  return <ChatClient />;
}