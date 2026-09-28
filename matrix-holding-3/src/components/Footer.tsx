import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].footer;
  const navT = UI_TRANSLATIONS[language].nav;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-[#F5F3EE] pt-24 pb-12 border-t border-warm-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Editorial Brand Heading */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-xs sm:text-sm tracking-wider text-warm-400 uppercase mb-4 font-mono">
                {t.tag}
              </p>
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-none">
                MATRIX <br />
                <span className="italic font-serif font-light text-warm-400">HOLDING</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-white/5 px-3 py-1.5 border border-white/10">
                <LanguageSwitcher dark />
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-xs sm:text-sm tracking-wider text-warm-300 hover:text-white transition-colors"
                aria-label="Back to top of page"
              >
                <span>{t.returnTop}</span>
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:-translate-y-1 transition-all">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs sm:text-sm tracking-wider font-semibold text-warm-300 uppercase font-mono">
              {t.col1}
            </h3>
            <div className="space-y-3 font-sans text-sm sm:text-base text-warm-300">
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-warm-700 hover:decoration-white"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <a
                  href="tel:+84964243026"
                  className="hover:text-white transition-colors tracking-wide"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="text-warm-400 leading-relaxed pt-2">
                {language === 'vi' ? COMPANY_INFO.address : COMPANY_INFO.addressEn}
              </p>
              <p className="text-xs sm:text-sm text-warm-500 font-mono tracking-wider">
                COORDINATES: {COMPANY_INFO.coordinates}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs sm:text-sm tracking-wider font-semibold text-warm-300 uppercase font-mono">
              {t.col2}
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                { name: navT.about, path: '/about' },
                { name: navT.ecosystem, path: '/ecosystem' },
                { name: navT.news, path: '/news' },
                { name: navT.careers, path: '/careers' },
                { name: navT.contact, path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-warm-300 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem Units */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs sm:text-sm tracking-wider font-semibold text-warm-300 uppercase font-mono">
              {t.col3}
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                { name: 'Matrix Network', path: '/ecosystem#matrix-network' },
                { name: 'Matrix Connect', path: '/ecosystem#matrix-connect' },
                { name: 'Matrix Ventures', path: '/ecosystem#matrix-ventures' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-warm-300 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <span className="inline-block text-xs font-mono tracking-wider text-burgundy-light bg-burgundy-deep/40 px-2.5 py-1 border border-burgundy/30">
                {language === 'vi' ? 'PHIÊN BẢN III' : 'HOLDING V3'}
              </span>
            </div>
          </div>

          {/* Col 4: Private Correspondence / Gazette */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs sm:text-sm tracking-wider font-semibold text-warm-300 uppercase font-mono">
              {t.col4}
            </h3>
            <p className="text-xs sm:text-sm text-warm-400 leading-relaxed">
              {t.dispatchDesc}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full bg-white/5 border-b border-white/20 px-3 py-2 text-xs sm:text-sm text-white placeholder-warm-500 focus:outline-none focus:border-warm-200 transition-colors rounded-none font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-warm-400 hover:text-white px-2 py-1 tracking-wider uppercase transition-colors"
                >
                  {t.join}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-warm-300 tracking-wide font-sans animate-fade-in">
                  {t.subscribed}
                </p>
              )}
            </form>

            <div className="pt-2">
              <p className="text-xs tracking-wider text-warm-500 uppercase mb-2 font-mono">
                {t.channels}
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-mono text-warm-400">
                <span className="hover:text-white cursor-pointer transition-colors">LINKEDIN</span>
                <span className="text-warm-700">&bull;</span>
                <span className="hover:text-white cursor-pointer transition-colors">JOURNAL</span>
                <span className="text-warm-700">&bull;</span>
                <span className="hover:text-white cursor-pointer transition-colors">ARCHIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-warm-400 gap-4 font-sans">
          <p className="tracking-wide">
            &copy; {COMPANY_INFO.year} {COMPANY_INFO.name}. {t.rights}
          </p>
          <div className="flex items-center gap-4 sm:gap-6 tracking-wider text-xs sm:text-sm font-mono">
            <span>EDITORIAL MONOGRAPH</span>
            <span>&bull;</span>
            <span>MINIMAL ARCHITECTURE</span>
            <span>&bull;</span>
            <span className="text-warm-300">
              {language === 'vi' ? 'HÀ NỘI, VIỆT NAM' : 'HANOI, VIETNAM'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
