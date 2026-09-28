import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, IMAGES, ECOSYSTEM_DATA, NEWS_DATA } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import ArticleModal from '../components/ArticleModal';
import type { NewsArticle } from '../types';

export default function HomePage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const isVi = language === 'vi';

  const featuredArticle = NEWS_DATA[0];
  const sideArticles = NEWS_DATA.slice(1, 3);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111]">
      {/* ========================================================
          1. HERO SECTION
          Full viewport, editorial typography, architectural monochrome image
          "WE CONNECT WHAT MATTERS.", metadata, EXPLORE ↓
          ======================================================== */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 border-b border-warm-300 overflow-hidden">
        {/* Architectural Monochrome Visual Background with subtle mask */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Matrix Holding Architecture"
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-20 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EE]/85 via-[#F5F3EE]/55 to-[#F5F3EE]" />
        </div>

        {/* Small Top Metadata */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-b border-warm-300 pb-4 text-xs sm:text-sm font-mono tracking-wider text-warm-600 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-burgundy animate-pulse" />
            <span className="text-[#111111] font-semibold">{t.hero.metaHold}</span>
            <span>/</span>
            <span>{t.hero.metaConn}</span>
          </div>
          <div className="flex items-center gap-4 text-warm-700">
            <span>{t.hero.badge}</span>
            <span className="text-burgundy font-bold">01 / 06</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="relative z-10 my-auto py-12 lg:py-20 max-w-6xl">
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] text-warm-600 uppercase mb-4 md:mb-6">
            {isVi ? 'PHIÊN BẢN 03 • HOLDING TỐI GIẢN CAO CẤP' : 'EDITORIAL CONCEPT 03 • LUXURY MINIMALIST HOLDING'}
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[1.08] text-[#111111]">
            <span className="font-sans font-light tracking-tight block">
              {t.hero.title1}
            </span>
            <span className="font-serif font-normal text-burgundy block mt-2 sm:mt-4">
              {t.hero.title2}
            </span>
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-4xl">
            <p className="text-base md:text-lg text-warm-700 max-w-lg font-sans leading-relaxed border-l-2 border-warm-400 pl-4">
              {t.hero.sub}
            </p>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-warm-600 uppercase">
              {t.hero.tags}
            </div>
          </div>
        </div>

        {/* Bottom Hero Bar with Small CTA */}
        <div className="relative z-10 flex items-center justify-between pt-6 border-t border-warm-300">
          <button
            onClick={() => scrollToSection('home-intro')}
            className="group flex items-center gap-3 text-xs sm:text-sm tracking-[0.15em] font-medium text-[#111111] hover:text-burgundy transition-colors"
          >
            <span>{t.hero.explore}</span>
            <span className="w-8 h-8 rounded-full border border-warm-400 flex items-center justify-center group-hover:border-burgundy group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-3.5 h-3.5" />
            </span>
          </button>

          <div className="text-right text-xs sm:text-sm font-mono text-warm-600 tracking-wider hidden sm:block">
            {t.hero.coords}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOME — INTRO SECTION
          Huge whitespace, large statement:
          "Matrix Holding builds an ecosystem where people, ideas and opportunities meet."
          Asymmetric layout with small text below.
          ======================================================== */}
      <section id="home-intro" className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Asymmetric Left Stamp */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs sm:text-sm font-mono tracking-[0.2em] text-warm-500 uppercase">
              {t.intro.tag}
            </div>
            <div className="h-px w-12 bg-burgundy" />
            <p className="text-sm sm:text-base text-warm-600 font-sans tracking-wide leading-relaxed">
              {t.intro.sideText}
            </p>
          </div>

          {/* Large Editorial Statement */}
          <div className="lg:col-span-9 space-y-12">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#111111] leading-[1.15] tracking-tight">
              {t.intro.statement}
            </h2>

            {/* Small text below, asymmetric offset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-warm-300">
              <div className="space-y-4 text-base sm:text-lg text-warm-700 font-sans leading-relaxed">
                <p>{t.intro.col1}</p>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-warm-700 font-sans leading-relaxed">
                <p>{t.intro.col2}</p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-xs sm:text-sm tracking-[0.15em] font-semibold text-[#111111] hover:text-burgundy border-b border-[#111111] hover:border-burgundy pb-1 transition-colors"
                  >
                    {t.intro.moreBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. HOME — ECOSYSTEM SECTION
          Title: OUR ECOSYSTEM
          Asymmetric, non-uniform layout:
          01 MATRIX NETWORK: large image + typo
          02 MATRIX CONNECT: reversed layout
          03 MATRIX VENTURES: alternating layout
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-warm-300 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto space-y-28 md:space-y-40">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-warm-300 pb-8 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-warm-600 uppercase mb-2">
                {t.ecosystemSection.tag}
              </p>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#111111] leading-none">
                {t.ecosystemSection.title1} <br />
                <span className="font-serif text-warm-600">
                  {t.ecosystemSection.title2}
                </span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-warm-600 max-w-md font-sans leading-relaxed">
              {t.ecosystemSection.sub}
            </p>
          </div>

          {/* Unit 01: MATRIX NETWORK */}
          {(() => {
            const unit = ECOSYSTEM_DATA[0];
            const desc = isVi ? unit.descriptionVi : unit.description;
            const category = isVi ? unit.categoryVi : unit.category;
            const caption = isVi ? unit.captionVi : unit.caption;
            const pillars = isVi ? unit.pillarsVi : unit.pillars;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Large Image on Left */}
                <div className="lg:col-span-7 group relative overflow-hidden bg-warm-200">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#111111]/85 text-[#F5F3EE] px-3 py-1.5 text-xs font-mono tracking-wider uppercase backdrop-blur-sm">
                    FIG. 01 &bull; {caption}
                  </div>
                </div>

                {/* Typography on Right */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl md:text-4xl text-burgundy font-light">
                      {unit.number}
                    </span>
                    <span className="text-xs tracking-[0.2em] font-mono text-warm-600 uppercase">
                      {category}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
                    {unit.name}
                  </h3>

                  <p className="text-base md:text-lg text-warm-700 font-sans leading-relaxed">
                    {desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-warm-300">
                    {pillars.slice(0, 2).map((p, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-warm-600 font-sans flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy flex-shrink-0" />
                        <span>{p}</span>
                      </p>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/ecosystem#matrix-network"
                      className="group inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.15em] font-medium text-[#111111] hover:text-burgundy transition-colors"
                    >
                      <span className="border-b border-[#111111] group-hover:border-burgundy pb-0.5">
                        {isVi ? 'KHÁM PHÁ MATRIX NETWORK' : 'EXPLORE NETWORK'}
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Unit 02: MATRIX CONNECT (Reversed layout) */}
          {(() => {
            const unit = ECOSYSTEM_DATA[1];
            const desc = isVi ? unit.descriptionVi : unit.description;
            const category = isVi ? unit.categoryVi : unit.category;
            const caption = isVi ? unit.captionVi : unit.caption;
            const pillars = isVi ? unit.pillarsVi : unit.pillars;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Typography on Left */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl md:text-4xl text-burgundy font-light">
                      {unit.number}
                    </span>
                    <span className="text-xs tracking-[0.2em] font-mono text-warm-600 uppercase">
                      {category}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
                    {unit.name}
                  </h3>

                  <p className="text-base md:text-lg text-warm-700 font-sans leading-relaxed">
                    {desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-warm-300">
                    {pillars.slice(0, 2).map((p, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-warm-600 font-sans flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy flex-shrink-0" />
                        <span>{p}</span>
                      </p>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/ecosystem#matrix-connect"
                      className="group inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.15em] font-medium text-[#111111] hover:text-burgundy transition-colors"
                    >
                      <span className="border-b border-[#111111] group-hover:border-burgundy pb-0.5">
                        {isVi ? 'KHÁM PHÁ MATRIX CONNECT' : 'EXPLORE CONNECT'}
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Large Image on Right */}
                <div className="lg:col-span-7 order-1 lg:order-2 group relative overflow-hidden bg-warm-200">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#111111]/85 text-[#F5F3EE] px-3 py-1.5 text-xs font-mono tracking-wider uppercase backdrop-blur-sm">
                    FIG. 02 &bull; {caption}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Unit 03: MATRIX VENTURES (Alternated layout) */}
          {(() => {
            const unit = ECOSYSTEM_DATA[2];
            const desc = isVi ? unit.descriptionVi : unit.description;
            const category = isVi ? unit.categoryVi : unit.category;
            const caption = isVi ? unit.captionVi : unit.caption;
            const pillars = isVi ? unit.pillarsVi : unit.pillars;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Large Image on Left */}
                <div className="lg:col-span-7 group relative overflow-hidden bg-warm-200">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#111111]/85 text-[#F5F3EE] px-3 py-1.5 text-xs font-mono tracking-wider uppercase backdrop-blur-sm">
                    FIG. 03 &bull; {caption}
                  </div>
                </div>

                {/* Typography on Right */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl md:text-4xl text-burgundy font-light">
                      {unit.number}
                    </span>
                    <span className="text-xs tracking-[0.2em] font-mono text-warm-600 uppercase">
                      {category}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
                    {unit.name}
                  </h3>

                  <p className="text-base md:text-lg text-warm-700 font-sans leading-relaxed">
                    {desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-warm-300">
                    {pillars.slice(0, 2).map((p, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-warm-600 font-sans flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy flex-shrink-0" />
                        <span>{p}</span>
                      </p>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/ecosystem#matrix-ventures"
                      className="group inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.15em] font-medium text-[#111111] hover:text-burgundy transition-colors"
                    >
                      <span className="border-b border-[#111111] group-hover:border-burgundy pb-0.5">
                        {isVi ? 'KHÁM PHÁ MATRIX VENTURES' : 'EXPLORE VENTURES'}
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================
          4. HOME — STATEMENT SECTION
          Fullscreen editorial section.
          ======================================================== */}
      <section className="relative min-h-[90vh] py-32 flex flex-col justify-center items-center px-6 md:px-12 bg-[#1A1A18] text-[#F5F3EE] overflow-hidden">
        {/* Subtle background architectural texture */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <img
            src={IMAGES.statement}
            alt="Monochrome Architectural Texture"
            className="w-full h-full object-cover filter grayscale contrast-150"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-warm-400 uppercase mb-8">
            {t.statementSection.tag}
          </p>

          <div className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.98] text-white">
            <span className="block transform transition-all duration-700 hover:text-burgundy-light">
              {t.statementSection.line1}
            </span>
            <span className="block text-warm-400 font-serif transform transition-all duration-700 delay-100 hover:text-white">
              {t.statementSection.line2}
            </span>
            <span className="block transform transition-all duration-700 delay-200 hover:text-burgundy-light">
              {t.statementSection.line3}
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg font-sans text-warm-300 max-w-2xl mx-auto pt-8 leading-relaxed tracking-wide">
            {t.statementSection.desc}
          </p>

          <div className="pt-8">
            <div className="inline-block h-12 w-px bg-warm-600" />
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HOME — NEWS SECTION
          Title: LATEST THOUGHTS
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-warm-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-warm-300 pb-8 mb-16 gap-4">
          <div>
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-warm-600 uppercase mb-2">
              {t.newsSection.tag}
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#111111] leading-none">
              {t.newsSection.title1} <br />
              <span className="font-serif text-warm-600">
                {t.newsSection.title2}
              </span>
            </h2>
          </div>
          <Link
            to="/news"
            className="text-xs sm:text-sm tracking-[0.15em] font-medium border-b border-[#111111] pb-1 text-[#111111] hover:text-burgundy hover:border-burgundy transition-colors inline-flex items-center gap-2"
          >
            <span>{t.newsSection.viewAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Featured Article */}
          {(() => {
            const title = isVi ? featuredArticle.titleVi : featuredArticle.title;
            const excerpt = isVi ? featuredArticle.excerptVi : featuredArticle.excerpt;
            const category = isVi ? featuredArticle.categoryVi : featuredArticle.category;
            const readTime = isVi ? featuredArticle.readTimeVi : featuredArticle.readTime;

            return (
              <article
                onClick={() => setSelectedArticle(featuredArticle)}
                className="lg:col-span-7 group cursor-pointer space-y-6"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-warm-200 relative border border-warm-300">
                  <img
                    src={featuredArticle.image}
                    alt={title}
                    className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                  />
                  <span className="absolute top-4 left-4 bg-[#111111] text-[#F5F3EE] text-xs font-mono tracking-wider px-3 py-1 uppercase">
                    {t.newsSection.featuredTag}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-warm-600">
                    <span>{featuredArticle.date}</span>
                    <span>&bull;</span>
                    <span className="text-burgundy font-semibold uppercase">{category}</span>
                    <span>&bull;</span>
                    <span>{readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] group-hover:text-burgundy transition-colors leading-tight">
                    {title}
                  </h3>

                  <p className="text-base text-warm-700 font-sans leading-relaxed line-clamp-3">
                    {excerpt}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center text-xs sm:text-sm tracking-wider font-medium border-b border-[#111111] group-hover:border-burgundy group-hover:text-burgundy pb-0.5 transition-colors">
                      {t.newsSection.readMore}
                    </span>
                  </div>
                </div>
              </article>
            );
          })()}

          {/* 2 Smaller Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-warm-300 border-t lg:border-t-0 lg:border-l border-warm-300 lg:pl-12">
            {sideArticles.map((article, idx) => {
              const title = isVi ? article.titleVi : article.title;
              const excerpt = isVi ? article.excerptVi : article.excerpt;
              const category = isVi ? article.categoryVi : article.category;

              return (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`group cursor-pointer space-y-4 ${
                    idx === 0 ? 'pb-8' : 'pt-8'
                  }`}
                >
                  <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-warm-600">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span className="text-burgundy font-semibold uppercase">{category}</span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-light text-[#111111] group-hover:text-burgundy transition-colors leading-snug">
                    {title}
                  </h4>

                  <p className="text-sm sm:text-base text-warm-700 font-sans leading-relaxed line-clamp-2">
                    {excerpt}
                  </p>

                  <div className="pt-1">
                    <span className="inline-flex items-center text-xs sm:text-sm tracking-wider font-mono text-warm-600 group-hover:text-burgundy transition-colors">
                      <span>{t.newsSection.explorePerspective}</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. HOME — CONTACT CTA SECTION
          Background dark.
          Large serif text: "LET'S TALK."
          ======================================================== */}
      <section className="bg-[#111111] text-[#F5F3EE] py-28 md:py-36 px-6 md:px-12 border-t border-warm-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-warm-500 uppercase">
              {t.ctaSection.tag}
            </p>
            <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-none">
              {t.ctaSection.title1} <br />
              <span className="font-serif font-light text-warm-400">
                {t.ctaSection.title2}
              </span>
            </h2>
            <p className="text-base md:text-lg text-warm-400 font-sans max-w-lg leading-relaxed">
              {t.ctaSection.desc}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:border-l border-white/10 lg:pl-12">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-mono tracking-wider text-warm-500 uppercase">
                {t.ctaSection.channels}
              </div>
              <div className="space-y-2 text-base sm:text-lg font-sans">
                <p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:text-warm-300 underline underline-offset-4 decoration-warm-700 hover:decoration-white transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+84964243026"
                    className="text-warm-300 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-warm-500 pt-1">
                  {isVi ? COMPANY_INFO.address : COMPANY_INFO.addressEn}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-between w-full sm:w-auto px-8 py-4 bg-[#F5F3EE] text-[#111111] hover:bg-burgundy hover:text-white text-xs sm:text-sm tracking-[0.15em] font-medium uppercase transition-all duration-300"
              >
                <span>{t.ctaSection.btn}</span>
                <span className="ml-4">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
