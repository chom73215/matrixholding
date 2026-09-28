import React from 'react';
import { Compass, Target, ArrowUpRight } from 'lucide-react';
import { getValuesData } from '../data/content';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].about;
  const valuesList = getValuesData(language);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-20">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
            {t.tag}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
            <span className="block mb-2 sm:mb-3">{t.heroTitle1}</span>
            <span className="block text-[#00F0FF] py-1 mb-2 sm:mb-3">
              {t.heroTitle2}
            </span>
            <span className="block">{t.heroTitle3}</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* 2. SECTION 01 — WHO WE ARE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-5xl md:text-6xl font-light text-zinc-700 select-none">
              01
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mt-2 mb-1">
              {t.sec01Tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
              {t.sec01Title}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
            <p className="text-white text-xl sm:text-2xl font-normal leading-snug">
              {t.sec01Lead}
            </p>
            <p>
              {t.sec01P1}
            </p>
            <p>
              {t.sec01P2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5">
              <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10">
                <div className="text-xs font-mono text-[#00F0FF] uppercase mb-1">{t.pillar1Name}</div>
                <div className="text-sm font-semibold text-white">{t.pillar1Desc}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10">
                <div className="text-xs font-mono text-[#00FF9D] uppercase mb-1">{t.pillar2Name}</div>
                <div className="text-sm font-semibold text-white">{t.pillar2Desc}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10">
                <div className="text-xs font-mono text-[#38BDF8] uppercase mb-1">{t.pillar3Name}</div>
                <div className="text-sm font-semibold text-white">{t.pillar3Desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02 & 03 — VISION & MISSION (2-Column High-Tech Grid) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1117] border border-white/10 relative overflow-hidden group hover:border-[#00F0FF]/40 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-4xl text-zinc-700 font-light">02</span>
              <Compass className="w-6 h-6 text-[#00F0FF]" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">
              {t.sec02Tag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              {t.sec02Title}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {t.sec02Desc}
            </p>
          </div>

          {/* MISSION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1117] border border-white/10 relative overflow-hidden group hover:border-[#00FF9D]/40 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-4xl text-zinc-700 font-light">03</span>
              <Target className="w-6 h-6 text-[#00FF9D]" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00FF9D] mb-2">
              {t.sec03Tag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              {t.sec03Title}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {t.sec03Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION 04 — VALUES (CONNECT, CREATE, GROW, IMPACT) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14">
          <div className="font-mono text-5xl md:text-6xl font-light text-zinc-700 select-none">
            04
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#00FF9D] mt-2 mb-1">
            {t.sec04Tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {t.sec04Title}
          </h2>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val) => (
            <div
              key={val.key}
              className="p-8 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00F0FF]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-zinc-500">{val.number}</span>
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {val.title}
                </h3>
                <div className="text-xs font-mono text-[#00FF9D] mb-4">
                  {val.concept}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{t.protocolEnforced}</span>
                <span className="text-white">v2.6</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#070A0F] to-[#0D1117] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white uppercase">
              {t.ctaCardTitle}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {t.ctaCardDesc}
            </p>
          </div>
          <Link
            to="/ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00F0FF] text-black font-semibold text-xs font-mono uppercase tracking-wider rounded hover:bg-[#00F0FF]/90 transition-all shrink-0"
          >
            <span>{t.ctaCardBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
