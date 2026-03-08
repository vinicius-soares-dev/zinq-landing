"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

interface HeaderProps {
  variant?: 'home' | 'general';
}

export const Header: React.FC<HeaderProps> = ({ variant = 'home' }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const APP_LOGIN_URL = "https://zinq.me/login"; 
  const APP_REGISTER_URL = "https://zinq.me/register";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomeVariant = variant === 'home';
  
  const headerBgClass = isHomeVariant
    ? (hasScrolled ? 'bg-white shadow-md' : 'bg-transparent')
    : 'bg-white shadow-sm border-b border-slate-100';

  const textClass = isHomeVariant
    ? (hasScrolled ? 'text-brand-blue' : 'text-white')
    : 'text-brand-blue';
    
  const linkClass = isHomeVariant
    ? (hasScrolled ? 'text-brand-blue hover:text-brand-orange' : 'text-slate-100 hover:text-brand-orange')
    : 'text-slate-600 hover:text-brand-blue';

  const mobileMenuButtonClass = isHomeVariant
     ? (hasScrolled ? 'text-brand-blue' : 'text-white')
     : 'text-brand-blue';

  const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => (
    <>
      <Link
        href="https://zinq.me/blog"
        className={`text-sm font-semibold transition-colors ${
          isMobile ? 'text-slate-700 hover:text-brand-orange' : linkClass
        }`}
      >
        Blog
      </Link>

      <a
        href={APP_LOGIN_URL}
        className={`text-sm font-semibold transition-colors ${
          isMobile ? 'text-slate-700 hover:text-brand-orange' : linkClass
        }`}
      >
        Entrar
      </a>
      
      <a
        href={APP_REGISTER_URL}
        className={`px-5 py-2 text-sm font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-colors ${
          isMobile
            ? 'bg-white text-brand-blue border border-brand-blue/20'
            : isHomeVariant && !hasScrolled
              ? 'bg-brand-blue text-white'
              : 'bg-brand-blue text-white'
        }`}
      >
        Criar Conta
      </a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/faviconzinq.png" alt="logo zinq" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className={`text-xl font-bold transition-colors ${textClass}`}>
            Zinq
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${mobileMenuButtonClass}`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <XIcon className={mobileMenuButtonClass} />
            ) : (
              <MenuIcon className={mobileMenuButtonClass} />
            )}
          </button>
        </div>
      </div>
      
      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full z-30 animate-fade-in bg-white shadow-lg border-t border-slate-100">
          <nav className="flex flex-col items-center gap-6 p-8">
            <NavLinks isMobile />
          </nav>
        </div>
      )}
    </header>
  );
};