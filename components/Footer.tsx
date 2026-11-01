"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Instagram, Gitlab, Globe, 
  Sparkles, Mail, MapPin, Zap
} from 'lucide-react';

const platformLinks = [
  { label: 'Zinq AI (Atendimento)', href: '/funcionalidades/ia' },
  { label: 'Z-Teams (Chat)', href: '/funcionalidades/chat' },
  { label: 'Kanban de Projetos', href: '/funcionalidades/kanban' },
  { label: 'Roleta Logística', href: '/funcionalidades/roletas' },
  { label: 'Gamificação', href: '/funcionalidades/gamificacao' },
];

const solutionLinks = [
  { label: 'Clínicas & Consultórios', href: '/clinicas' },
  { label: 'Imobiliárias', href: '/imobiliarias' },
  { label: 'Equipes de Vendas', href: '/vendas' },
  { label: 'Estética & Beleza', href: '/estetica' },
  { label: 'Escritórios B2B', href: '/b2b' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-20 pb-10 relative overflow-hidden border-t border-slate-800">
      {/* Efeito de Luz Fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Grid Principal de Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: A Marca */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 outline-none">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Zap size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Zinq.me</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              O ecossistema definitivo para negócios modernos. Agendamento, IA, comunicação e gestão em uma única plataforma de alta performance.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="mailto:contato@zinq.me" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={16} /> suporte@vgtechsolutions.com.br
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Operando em todo o Brasil
              </span>
            </div>
          </div>

          {/* Coluna 2: O Motor (Features) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400"/> A Plataforma
            </h4>
            <ul className="flex flex-col gap-4">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group outline-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6">Soluções por Nicho</h4>
            <ul className="flex flex-col gap-4">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group outline-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Legal & Suporte */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://zinq.me/termos-de-uso" target='_blank' className="text-slate-400 text-sm hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="https://zinq.me/politicas-de-privacidade" target='_blank' className="text-slate-400 text-sm hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="https://zinq.me/login" className="text-slate-400 text-sm hover:text-white transition-colors">Central de Ajuda</a></li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>

        {/* Seção Inferior: Copyright e Créditos do Desenvolvedor */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="text-slate-500 text-sm text-center lg:text-left">
            &copy; {new Date().getFullYear()} Zinq Tecnologia. Todos os direitos reservados.
          </div>

          {/* 🎯 Badge do Desenvolvedor (Vinicius Soares) */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg shadow-black/50"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xs">
              <span className="text-slate-500">Engineered with precision by</span>
              <a 
                href="https://viniciussoares.vgtech.solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-slate-200 hover:text-white transition-colors"
              >
                Vinicius Soares
              </a>
            </div>
            
            <div className="w-px h-4 bg-slate-700 hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://viniciussoares.vgtech.solutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Portfólio"
              >
                <Globe size={16} />
              </a>
              <a 
                href="https://gitlab.com/viniciussoares" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-orange-500 transition-colors"
                aria-label="GitLab"
              >
                <Gitlab size={16} />
              </a>
              <a 
                href="https://www.instagram.com/viniciussoaresdev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};