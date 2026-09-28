import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Terminal, Globe, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].footer;
  const navT = UI_TRANSLATIONS[language].nav;

  const addressText = language === 'vi' ? COMPANY_INFO.address.vi : COMPANY_INFO.address.en;

  return (
    <footer className="relative bg-[#070A0F] border-t border-white/10 text-zinc-400 overflow-hidden pt-16 pb-12">
      {/* Background subtle grid & gradient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00F0FF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION: Massive Futuristic Branding Banner */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#00F0FF] uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
                {t.holdingArch}
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white select-none">
                MATRIX <span className="text-[#00F0FF]/90 font-light">HOLDING</span>
              </h2>
            </div>
            
            <div className="max-w-md">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {t.holdingDesc}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="text-[#00FF9D]">{t.statusOperational}</span>
                <span>•</span>
                <span>{t.secureMesh}</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Contact Directives */}
          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
              {t.contactPortal}
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00FF9D] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-400">
                  {addressText}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation Directory */}
          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#00FF9D]" />
              {t.directory}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-mono">
              <li>
                <Link to="/" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">01</span> {navT.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">02</span> {navT.about}
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">03</span> {navT.ecosystem}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">04</span> {navT.news}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">05</span> {navT.careers}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  <span className="text-zinc-600">06</span> {navT.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem Arms */}
          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#00F0FF]" />
              {t.ecosystemArms}
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link to="/ecosystem#matrix-network" className="group block">
                  <div className="text-white group-hover:text-[#00F0FF] font-medium flex items-center justify-between">
                    <span>MATRIX NETWORK</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    {language === 'vi' ? 'Nhân Tài & Cộng Đồng Phân Tán' : 'Talent & Distributed Communities'}
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#matrix-connect" className="group block">
                  <div className="text-white group-hover:text-[#00FF9D] font-medium flex items-center justify-between">
                    <span>MATRIX CONNECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    {language === 'vi' ? 'Hành Lang Doanh Nghiệp & Nguồn Lực' : 'Enterprise Bridges & Resource Matching'}
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#matrix-ventures" className="group block">
                  <div className="text-white group-hover:text-[#38BDF8] font-medium flex items-center justify-between">
                    <span>MATRIX VENTURES</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    {language === 'vi' ? 'Ươm Tạo & Nguồn Vốn Chiến Lược' : 'Strategic Incubation & Growth Capital'}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Directive Box */}
          <div className="p-5 rounded-xl bg-[#0D1117] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#00FF9D] mb-1">
                {t.executiveInitiative}
              </div>
              <h5 className="text-sm font-semibold text-white">
                {t.initiativeTitle}
              </h5>
              <p className="text-xs text-zinc-400 mt-2">
                {t.initiativeDesc}
              </p>
            </div>

            <div className="mt-5">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#00F0FF]/10 border border-[#00F0FF]/40 hover:border-[#00F0FF] text-white text-xs font-mono rounded transition-colors"
              >
                <span>{t.initiateContact}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF]" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {COMPANY_INFO.year} {COMPANY_INFO.name}. {t.allRightsReserved}
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-zinc-400 cursor-pointer">{t.privacyProtocol}</span>
            <span className="hover:text-zinc-400 cursor-pointer">{t.securityDisclosure}</span>
            <span className="hover:text-zinc-400 cursor-pointer">{t.termsOfNetwork}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
