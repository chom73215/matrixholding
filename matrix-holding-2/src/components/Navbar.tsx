import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { num: '01', name: t.home, path: '/' },
    { num: '02', name: t.about, path: '/about' },
    { num: '03', name: t.ecosystem, path: '/ecosystem' },
    { num: '04', name: t.news, path: '/news' },
    { num: '05', name: t.careers, path: '/careers' },
    { num: '06', name: t.contact, path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A0F]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-3 select-none">
          {/* Futuristic geometric icon */}
          <div className="relative w-8 h-8 md:w-9 md:h-9 bg-[#0D1117] border border-[#00F0FF]/40 rounded flex items-center justify-center overflow-hidden group-hover:border-[#00FF9D] transition-colors">
            <div className="absolute inset-0 bg-radial-gradient from-[#00F0FF]/20 to-transparent" />
            <span className="font-mono text-xs md:text-sm font-bold text-[#00F0FF] group-hover:text-[#00FF9D] transition-colors">
              M
            </span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00FF9D]" />
          </div>

          <div className="flex flex-col">
            <div className="text-base md:text-lg font-bold tracking-[0.2em] text-white leading-none group-hover:text-[#00F0FF] transition-colors">
              MATRIX
            </div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#00FF9D] leading-tight">
              {t.holdingSubtitle}
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-colors duration-200 flex items-center gap-1.5 group ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span
                  className={`text-[10px] transition-colors ${
                    isActive ? 'text-[#00F0FF]' : 'text-zinc-500 group-hover:text-[#00FF9D]'
                  }`}
                >
                  {link.num}
                </span>
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#00FF9D]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE: LANGUAGE SWITCHER + CTA BUTTON */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Futuristic Language Toggle Button */}
          <div className="flex items-center p-0.5 rounded-lg bg-[#0D1117] border border-white/10 font-mono text-xs">
            <button
              onClick={() => setLanguage('vi')}
              className={`px-2.5 py-1 rounded transition-all duration-200 flex items-center gap-1 ${
                language === 'vi'
                  ? 'bg-[#00FF9D]/15 text-[#00FF9D] font-bold border border-[#00FF9D]/40 shadow-[0_0_10px_rgba(0,255,157,0.2)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Tiếng Việt"
            >
              <span>VI</span>
            </button>
            <div className="h-3 w-px bg-white/10" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded transition-all duration-200 flex items-center gap-1 ${
                language === 'en'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] font-bold border border-[#00F0FF]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase bg-[#0D1117] text-white border border-[#00F0FF]/40 rounded hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300"
          >
            <span>{t.startConversation}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute top-0 right-0 w-1 h-1 bg-[#00FF9D]" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick mobile language toggle */}
          <button
            onClick={toggleLanguage}
            className="p-1.5 px-2.5 text-xs font-mono rounded bg-[#0D1117] border border-white/10 text-[#00F0FF] flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span className="font-bold">{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="p-2 text-zinc-300 hover:text-white bg-[#0D1117] border border-white/10 rounded focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F0FF]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN/OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070A0F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-[#00FF9D]" />
                {t.directory}
              </div>

              {/* Language selection in mobile menu */}
              <div className="flex items-center gap-1 font-mono text-xs bg-white/5 p-1 rounded border border-white/10">
                <button
                  onClick={() => setLanguage('vi')}
                  className={`px-2 py-0.5 rounded ${language === 'vi' ? 'bg-[#00FF9D]/20 text-[#00FF9D] font-bold' : 'text-zinc-400'}`}
                >
                  TIẾNG VIỆT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-[#00F0FF]/20 text-[#00F0FF] font-bold' : 'text-zinc-400'}`}
                >
                  ENGLISH
                </button>
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between py-3 border-b border-white/5 font-mono text-sm tracking-widest transition-colors ${
                    isActive ? 'text-[#00F0FF] pl-2 font-bold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500">{link.num}</span>
                    <span>{link.name}</span>
                  </div>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />}
                </Link>
              );
            })}

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] font-mono text-xs tracking-wider rounded uppercase hover:bg-[#00F0FF]/20"
              >
                <span>{t.startConversation} →</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
