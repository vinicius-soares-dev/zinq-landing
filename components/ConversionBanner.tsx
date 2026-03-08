"use client";

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CalendarCheck } from 'lucide-react';

interface ConversionBannerProps {
  variant?: 'floating' | 'inline';
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ variant = 'floating' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const APP_REGISTER_URL = "https://zinq.me/register";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isHidden = sessionStorage.getItem('hide_conversion_banner');
      
      if (!isHidden) {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hide_conversion_banner', 'true');
  };

  if (variant === 'inline') {
    return (
      <div className="w-full bg-gradient-to-r from-slate-900 to-brand-blue rounded-2xl p-6 md:p-8 text-white shadow-xl my-8 relative overflow-hidden animate-fade-in">
        {/* Decorativo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <CalendarCheck className="text-brand-orange" />
              Gostou da praticidade?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Crie sua própria agenda online gratuita no Zinq e receba agendamentos 24h por dia.
            </p>
          </div>
          <a
            href={APP_REGISTER_URL}
            className="whitespace-nowrap px-6 py-3 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            Criar minha conta grátis <ArrowRight size={18} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-40 animate-slide-up">
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-5 relative overflow-hidden">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors p-1"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-brand-blue/10 rounded-lg text-brand-blue shrink-0">
            <CalendarCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">
              Você também presta serviços?
            </h4>
            <p className="text-xs md:text-sm text-slate-500 mt-1 mb-3 leading-relaxed">
              Organize sua agenda e receba pagamentos automáticos como este profissional.
            </p>
            <a
              href={APP_REGISTER_URL}
              className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-wide group"
            >
              Começar Grátis agora <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};