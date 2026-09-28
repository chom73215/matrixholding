import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Network, 
  Layers, 
  TrendingUp, 
  Activity, 
  Terminal, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { getEcosystemData, getNewsData } from '../data/content';
import type { NewsArticle } from '../data/content';
import { ArticleModal } from '../components/ArticleModal';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Home: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [hoveredEcosystem, setHoveredEcosystem] = useState<string | null>(null);

  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].home;
  const ecosystemList = getEcosystemData(language);
  const newsList = getNewsData(language);

  const featuredNews = newsList[0];
  const sideNews = newsList.slice(1, 3);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* 1. HERO SECTION (FULLSCREEN) */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Subtle grid line background overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00F0FF]/8 rounded-full blur-[140px] pointer-events-none" />

        {/* System Status Tracker Bar */}
        <div className="relative max-w-7xl mx-auto w-full pt-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1117]/80 border border-white/10 text-[11px] font-mono tracking-widest text-zinc-400 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="text-white">{t.statusProtocol}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#00F0FF]">{t.architectureVer}</span>
          </motion.div>
        </div>

        {/* Main Hero Content */}
        <div className="relative max-w-7xl mx-auto w-full my-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full max-w-full"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.85rem] font-extrabold tracking-tight text-white uppercase select-none leading-relaxed py-2 lg:whitespace-nowrap">
              <span className="text-white">{t.heroLine1} </span>
              <span className="text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]">
                {t.heroLine2}
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              {t.heroSubheading}
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/ecosystem"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#00F0FF] text-black font-semibold text-xs md:text-sm font-mono tracking-widest rounded transition-all duration-300 hover:bg-[#00F0FF]/90 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
              >
                <span>{t.exploreEcosystem}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0D1117] text-white border border-white/20 font-mono text-xs md:text-sm tracking-widest rounded hover:border-[#00FF9D] hover:text-[#00FF9D] hover:shadow-[0_0_20px_rgba(0,255,157,0.2)] transition-all duration-300"
              >
                <span>{t.contactMatrix}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 pt-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse" />
            <span>{t.connectivityMatrix}</span>
          </div>

          <a 
            href="#ecosystem-overview" 
            className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors"
          >
            <span>{t.scrollExplore}</span>
            <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </section>

      {/* 2. HOME — ECOSYSTEM: ONE HOLDING. THREE CONNECTIONS. */}
      <section id="ecosystem-overview" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] tracking-widest uppercase mb-2">
            <Layers className="w-4 h-4 text-[#00FF9D]" />
            {t.ecoSectionTag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            {t.ecoSectionTitle1} <br />
            <span className="text-zinc-500">{t.ecoSectionTitle2}</span>
          </h2>
        </div>

        {/* Vertical Stack Cards */}
        <div className="space-y-6">
          {ecosystemList.map((eco) => {
            const isHovered = hoveredEcosystem === eco.id;
            return (
              <motion.div
                key={eco.id}
                onHoverStart={() => setHoveredEcosystem(eco.id)}
                onHoverEnd={() => setHoveredEcosystem(null)}
                className={`
                  relative rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden
                  border backdrop-blur-md bg-[#0A0E14]
                  ${isHovered 
                    ? 'border-[#00F0FF]/50 shadow-[0_0_40px_rgba(0,240,255,0.15)] scale-[1.01]' 
                    : 'border-white/10 hover:border-white/20'}
                `}
              >
                {/* Subtle corner tech accent */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#00F0FF]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Large Number & Basic Info */}
                  <div className="lg:col-span-4 flex items-start gap-6">
                    <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-light text-zinc-700 tracking-tighter select-none">
                      {eco.number}
                    </span>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#00FF9D] mb-1">
                        {t.pillarNode}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                        {eco.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 italic font-mono">
                        "{eco.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Center: Description & Key Pillars */}
                  <div className="lg:col-span-5">
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                      {eco.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {eco.keyPillars.map((p, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {p.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Abstract Dynamic Visual & Arrow CTA */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
                    <div className="flex items-center gap-3">
                      {eco.id === 'matrix-network' && (
                        <div className="relative w-16 h-16 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center">
                          <Network className="w-8 h-8 text-[#00F0FF] animate-pulse" />
                        </div>
                      )}
                      {eco.id === 'matrix-connect' && (
                        <div className="relative w-16 h-16 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center">
                          <Layers className="w-8 h-8 text-[#00FF9D] animate-pulse" />
                        </div>
                      )}
                      {eco.id === 'matrix-ventures' && (
                        <div className="relative w-16 h-16 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 text-[#38BDF8] animate-pulse" />
                        </div>
                      )}
                      <div className="hidden sm:block text-right">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">STATUS</div>
                        <div className="text-xs font-mono text-white">{t.statusSync}</div>
                      </div>
                    </div>

                    <Link
                      to={`/ecosystem#${eco.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/5 hover:bg-[#00F0FF] hover:text-black border border-white/15 hover:border-[#00F0FF] text-xs font-mono tracking-wider transition-all duration-300 group"
                    >
                      <span>{t.explorePillar}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. HOME — ABOUT: BEYOND A COMPANY. AN ECOSYSTEM. */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF9D] uppercase tracking-widest mb-3">
              <Activity className="w-4 h-4" />
              {t.aboutTag}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              {t.aboutTitle1} <br />
              <span className="text-[#00F0FF]">{t.aboutTitle2}</span>
            </h2>

            <p className="mt-8 text-base md:text-xl text-zinc-300 leading-relaxed font-light">
              {t.aboutDesc}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] hover:text-[#00FF9D] uppercase transition-colors"
              >
                <span>{t.readPhilosophy}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* High-tech animated telemetry visual grid */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-2xl bg-[#0D1117] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {t.telemetryMatrix}
                </span>
                <span className="text-[11px] font-mono text-[#00FF9D]">{t.liveSync}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white">03</div>
                  <div className="text-xs text-zinc-400 mt-1">{t.ecoPillarsMetric}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#00F0FF]">10,000+</div>
                  <div className="text-xs text-zinc-400 mt-1">{t.networkNodesMetric}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#00FF9D]">100%</div>
                  <div className="text-xs text-zinc-400 mt-1">{t.synergyVelocityMetric}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-zinc-300">
                    {language === 'vi' ? 'TOÀN CẦU' : 'GLOBAL'}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{t.connectivityReachMetric}</div>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-500 space-y-1">
                <div className="flex justify-between">
                  <span>{t.coreIntegration}</span>
                  <span className="text-white">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.securityProtocol}</span>
                  <span className="text-white">TLS 1.3 / E2E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOME — NEWS: FROM THE MATRIX (Dark Editorial) */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00FF9D]" />
              {t.newsTag}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {t.newsTitle}
            </h2>
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
          >
            <span>{t.viewAllNews}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF]" />
          </Link>
        </div>

        {/* 1 Featured Large + 2 Small Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large */}
          {featuredNews && (
            <div
              onClick={() => setActiveArticle(featuredNews)}
              className="lg:col-span-7 group cursor-pointer rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00F0FF]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#00F0FF] border border-[#00F0FF]/30 uppercase">
                  {featuredNews.category} • {t.featured}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                  <span>{featuredNews.date}</span>
                  <span>•</span>
                  <span>{featuredNews.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                  {featuredNews.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">
                  {featuredNews.summary}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#00FF9D]">
                  <span>{t.readDispatch}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* 2 Small Articles Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideNews.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group cursor-pointer rounded-2xl bg-[#0D1117] border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300 p-6 flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span className="text-[#00FF9D]">{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 font-light">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-white">
                  <span>{art.readTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOME — CTA: LET'S BUILD WHAT'S NEXT. (Fullscreen / High impact) */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Glow behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00FF9D]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#00FF9D] uppercase tracking-widest mb-6">
            <Cpu className="w-3.5 h-3.5" />
            {t.ctaTag}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-normal sm:leading-relaxed">
            <span className="text-white">{t.ctaTitle1} </span>
            <span className="text-[#00FF9D] drop-shadow-[0_0_20px_rgba(0,255,157,0.35)]">
              {t.ctaTitle2}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.ctaDesc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00FF9D] text-black font-semibold text-xs md:text-sm font-mono tracking-widest rounded hover:bg-[#00FF9D]/90 hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] transition-all"
            >
              <span>{t.connectWithUs}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D1117] text-white border border-white/20 hover:border-white/50 text-xs md:text-sm font-mono tracking-widest rounded transition-all"
            >
              <span>{t.joinMatrixTeam}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
};
