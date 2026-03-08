import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Coluna 1 - Logo + Descrição */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              {/* 🎯 Imagem otimizada nativamente pelo Next.js */}
              <Image 
                src="/faviconzinq.png" 
                alt="logo Zinq" 
                width={28} 
                height={28} 
                className="w-7 h-7 object-contain" 
              />
              <span className="font-bold text-brand-blue text-lg">Zinq</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Mais que uma agenda online: sua vitrine digital para atrair, organizar e encantar clientes.
            </p>
          </div>

          {/* Coluna 2 - Links Legais */}
          <div className="flex flex-col items-center md:items-start gap-2 text-slate-600">
            <h3 className="font-semibold text-slate-700 mb-2">Legal</h3>
            {/* 🎯 Link atualizado para usar href em vez de to */}
            <Link
              href="https://zinq.me/termos-de-uso"
              className="text-sm hover:text-brand-blue transition-colors"
            >
              Termos e Condições
            </Link>
            <Link
              href="https://zinq.me/politicas-de-privacidade"
              className="text-sm hover:text-brand-blue transition-colors"
            >
              Políticas de Privacidade
            </Link>
          </div>

          {/* Coluna 3 - Direitos Autorais */}
          <div className="flex flex-col items-center md:items-end justify-center text-slate-500">
            <p className="text-sm">
              © {currentYear} Zinq. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};