import React, { useState } from 'react';
import { 
  Network, 
  Layers, 
  TrendingUp, 
  ArrowRight, 
  ArrowUpRight, 
  Cpu, 
  ChevronDown
} from 'lucide-react';
import { getEcosystemData } from '../data/content';
import { NetworkGraphVisual } from '../components/NetworkGraphVisual';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Ecosystem: React.FC = () => {
  const [activeEcosystem, setActiveEcosystem] = useState<string>('matrix-network');
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].ecosystem;
  const ecosystemList = getEcosystemData(language);

  const handleSelectEcosystem = (id: string) => {
    setActiveEcosystem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInitiateContact = (topic: string) => {
    navigate(`/contact?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-24 pb-20">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION WITH LARGE VISUAL NETWORK GRAPH */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/5 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1117] border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
          {t.mapTag}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
          <span className="block mb-2">{t.heroTitle1}</span>
          <span className="block text-[#00F0FF] py-1">
            {t.heroTitle2}
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
          {t.heroDesc}
        </p>

        {/* Central Visual Network: Matrix Holding -> Network, Connect, Ventures */}
        <div className="w-full mt-4">
          <NetworkGraphVisual
            onSelectEcosystem={handleSelectEcosystem}
            activeId={activeEcosystem}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
          <span>{t.scrollPrompt}</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#00F0FF]" />
        </div>
      </section>

      {/* 2. 70-100vh IMMERSIVE SECTIONS FOR EACH ECOSYSTEM */}
      <div className="relative">
        {ecosystemList.map((eco, index) => {
          const isNetwork = eco.id === 'matrix-network';
          const isConnect = eco.id === 'matrix-connect';
          const isVentures = eco.id === 'matrix-ventures';

          return (
            <section
              key={eco.id}
              id={eco.id}
              className={`
                relative min-h-[85vh] lg:min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5
                ${index % 2 === 1 ? 'bg-[#070A0F]' : 'bg-[#050505]'}
              `}
            >
              {/* Pillar Ambient Lighting */}
              <div 
                className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-20"
                style={{ backgroundColor: eco.accentColor }}
              />

              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Number, Title, Description, Metrics, CTA */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-extralight text-zinc-700 select-none">
                        {eco.number}
                      </span>
                      <div>
                        <div 
                          className="text-xs font-mono uppercase tracking-widest"
                          style={{ color: eco.accentColor }}
                        >
                          {t.pillarTag}
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                          {eco.title}
                        </h2>
                      </div>
                    </div>

                    <p 
                      className="text-base sm:text-lg font-mono mb-6 italic"
                      style={{ color: eco.accentColor }}
                    >
                      "{eco.tagline}"
                    </p>

                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light mb-8">
                      {eco.description}
                    </p>

                    {/* Key Pillars Breakdown */}
                    <div className="space-y-3 mb-8">
                      {eco.keyPillars.map((pillar, pIdx) => (
                        <div 
                          key={pIdx}
                          className="p-4 rounded-xl bg-[#0D1117]/80 border border-white/10 flex items-start gap-3"
                        >
                          <div 
                            className="w-2 h-2 rounded-full mt-1.5 shrink-0" 
                            style={{ backgroundColor: eco.accentColor }}
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {pillar.title}
                            </h4>
                            <p className="text-xs text-zinc-400 mt-0.5">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-8 pt-4 border-t border-white/5">
                      {eco.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-xs font-mono text-zinc-500 uppercase">{m.label}</div>
                          <div className="text-lg sm:text-xl font-mono font-bold text-white mt-1">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleInitiateContact(eco.title)}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-lg"
                        style={{
                          backgroundColor: eco.accentColor,
                          boxShadow: `0 0 25px ${eco.accentColor}40`,
                        }}
                      >
                        <span>{t.engageWith} {eco.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#0D1117] text-white border border-white/20 hover:border-white/40 text-xs font-mono uppercase tracking-wider transition-colors"
                      >
                        <span>{t.generalInquiry}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Abstract High-Tech Visual Widget */}
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="relative p-8 rounded-3xl bg-[#0D1117] border border-white/10 overflow-hidden shadow-2xl group">
                      {/* Subtle internal grid */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                      {/* Header bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                            {t.nodeModule} {eco.number}
                          </span>
                        </div>
                        <span 
                          className="text-[11px] font-mono px-2 py-0.5 rounded border"
                          style={{
                            color: eco.accentColor,
                            borderColor: `${eco.accentColor}40`,
                            backgroundColor: `${eco.accentColor}10`,
                          }}
                        >
                          {t.operational}
                        </span>
                      </div>

                      {/* Specialized Visual Presentation per Pillar */}
                      {isNetwork && (
                        <div className="py-8 flex flex-col items-center justify-center">
                          <div className="relative w-44 h-44 rounded-full border border-[#00F0FF]/30 flex items-center justify-center animate-pulse-subtle">
                            <div className="w-32 h-32 rounded-full border border-dashed border-[#00F0FF]/40 flex items-center justify-center">
                              <Network className="w-16 h-16 text-[#00F0FF]" />
                            </div>
                            <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-[#00FF9D] animate-ping" />
                            <div className="absolute bottom-4 right-8 w-2.5 h-2.5 rounded-full bg-[#00F0FF]" />
                          </div>
                          <div className="mt-6 text-center">
                            <div className="text-sm font-mono text-white font-bold">
                              {language === 'vi' ? 'GIAO THỨC PHÂN TÁN' : 'DECENTRALIZED PROTOCOL'}
                            </div>
                            <div className="text-xs font-mono text-zinc-500 mt-1">
                              {language === 'vi' ? 'Mạng Lưới Cộng Đồng Xuyên Biên Giới' : 'Cross-Border Community Mesh'}
                            </div>
                          </div>
                        </div>
                      )}

                      {isConnect && (
                        <div className="py-8 flex flex-col items-center justify-center">
                          <div className="relative w-44 h-44 rounded-2xl border border-[#00FF9D]/30 flex items-center justify-center rotate-45 bg-[#00FF9D]/5">
                            <div className="w-28 h-28 border border-white/20 flex items-center justify-center -rotate-45">
                              <Layers className="w-16 h-16 text-[#00FF9D]" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse" />
                          </div>
                          <div className="mt-6 text-center">
                            <div className="text-sm font-mono text-white font-bold">
                              {language === 'vi' ? 'HÀNH LANG DOANH NGHIỆP' : 'ENTERPRISE CONDUIT'}
                            </div>
                            <div className="text-xs font-mono text-zinc-500 mt-1">
                              {language === 'vi' ? 'Hành Lang Hiệp Đồng Cấp Thể Chế' : 'Institutional Synergy Corridors'}
                            </div>
                          </div>
                        </div>
                      )}

                      {isVentures && (
                        <div className="py-8 flex flex-col items-center justify-center">
                          <div className="relative w-44 h-44 rounded-full border border-[#38BDF8]/30 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center">
                              <TrendingUp className="w-16 h-16 text-[#38BDF8]" />
                            </div>
                            <div className="absolute top-0 right-1/4 w-3 h-3 rounded-full bg-[#38BDF8] animate-ping" />
                          </div>
                          <div className="mt-6 text-center">
                            <div className="text-sm font-mono text-white font-bold">
                              {language === 'vi' ? 'VƯỜN ƯƠM ĐÓN ĐẦU' : 'FRONTIER INCUBATOR'}
                            </div>
                            <div className="text-xs font-mono text-zinc-500 mt-1">
                              {language === 'vi' ? 'Động Cơ Chiến Lược Từ Seed Đến Growth' : 'Strategic Seed-To-Growth Engine'}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Footer telemetry */}
                      <div className="pt-4 border-t border-white/10 text-xs font-mono text-zinc-500 flex justify-between">
                        <span>LATENCY: 0.8ms</span>
                        <span>HASH: 0x9F4B...28A</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. BOTTOM SUMMARY CTA */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#0D1117] to-[#050505] border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
            {t.exploreCollabTitle}
          </h3>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            {t.exploreCollabDesc}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00FF9D] text-black font-semibold text-xs font-mono uppercase tracking-widest rounded hover:bg-[#00FF9D]/90 transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)]"
            >
              <span>{t.connectBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
