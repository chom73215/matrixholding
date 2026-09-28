import { Link } from 'react-router-dom';
import { ECOSYSTEM_DATA } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function EcosystemPage() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].ecosystemPage;
  const isVi = language === 'vi';

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111] pt-28">
      {/* ========================================================
          1. HERO
          THREE WAYS TO CONNECT.
          Editorial typography + Chapter Quickjump
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24 border-b border-warm-300">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-warm-300 pb-8 mb-12 gap-8">
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-4">
              {t.tag}
            </p>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#111111] leading-[0.9] tracking-tight">
              {t.title1} <br />
              <span className="font-serif font-normal text-burgundy">{t.title2}</span> <br />
              {t.title3}
            </h1>
          </div>

          <div className="lg:max-w-md space-y-4">
            <p className="text-sm md:text-base text-warm-700 font-sans leading-relaxed">
              {t.sub}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {ECOSYSTEM_DATA.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => scrollToChapter(unit.id)}
                  className="px-3.5 py-1.5 border border-warm-400 hover:border-black text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  {unit.number} / {unit.name.replace('MATRIX ', '')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono text-warm-600">
          <div>
            {isVi ? '// CHƯƠNG 01: LỰC HÚT VẬN HÀNH' : '// CHAPTER 01: OPERATIONAL GRAVITY'}
          </div>
          <div>
            {isVi ? '// CHƯƠNG 02: LIÊN MINH TÍN NHIỆM CAO' : '// CHAPTER 02: HIGH-TRUST NETWORKS'}
          </div>
          <div>
            {isVi ? '// CHƯƠNG 03: NGUỒN VỐN TRƯỜNG KỲ' : '// CHAPTER 03: LONG-HORIZON CAPITAL'}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE THREE CHAPTERS
          Scroll progression like an editorial story monograph.
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {ECOSYSTEM_DATA.map((chapter, idx) => {
          const subtitle = isVi ? chapter.subtitleVi : chapter.subtitle;
          const category = isVi ? chapter.categoryVi : chapter.category;
          const tagline = isVi ? chapter.taglineVi : chapter.tagline;
          const description = isVi ? chapter.descriptionVi : chapter.description;
          const detailedOverview = isVi ? chapter.detailedOverviewVi : chapter.detailedOverview;
          const pillars = isVi ? chapter.pillarsVi : chapter.pillars;
          const caption = isVi ? chapter.captionVi : chapter.caption;

          return (
            <article
              key={chapter.id}
              id={chapter.id}
              className={`py-28 md:py-36 border-b border-warm-300 ${
                idx % 2 === 1 ? 'bg-warm-200/30 -mx-6 md:-mx-12 px-6 md:px-12' : ''
              }`}
            >
              {/* Chapter Header Bar */}
              <div className="flex items-center justify-between border-b border-warm-300 pb-4 mb-12 text-xs font-mono tracking-widest text-warm-600">
                <span className="text-burgundy font-semibold">
                  {t.chapterTag} {chapter.number} {t.of}
                </span>
                <span className="uppercase">{category}</span>
              </div>

              {/* Chapter Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column */}
                <div className="lg:col-span-6 space-y-8">
                  <div>
                    <span className="font-mono text-5xl sm:text-6xl text-warm-400 font-light block mb-2">
                      {chapter.number}
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#111111] leading-tight">
                      {chapter.name}
                    </h2>
                    <p className="font-serif italic text-lg sm:text-xl text-warm-700 mt-2">
                      &ldquo;{subtitle}&rdquo;
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-warm-800 font-sans leading-relaxed">
                    {description}
                  </p>

                  <div className="p-6 bg-[#F5F3EE] border border-warm-300 space-y-3">
                    <span className="text-xs font-mono tracking-widest text-warm-500 uppercase block">
                      {t.mandate}
                    </span>
                    <p className="text-sm text-warm-700 leading-relaxed font-sans">
                      {detailedOverview}
                    </p>
                  </div>

                  {/* Pillars */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-mono tracking-[0.25em] text-warm-600 uppercase">
                      {t.pillars}
                    </h3>
                    <div className="space-y-2.5">
                      {pillars.map((pillar, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-3 p-3 bg-warm-100/80 border border-warm-300/80 text-xs sm:text-sm text-warm-800"
                        >
                          <span className="font-mono text-xs text-burgundy font-semibold">
                            0{pIdx + 1}
                          </span>
                          <span>{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {chapter.metrics && (
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-warm-300">
                      {chapter.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-1">
                          <span className="font-serif text-2xl sm:text-3xl font-light text-[#111111] block">
                            {m.value}
                          </span>
                          <span className="text-xs font-mono tracking-wider text-warm-600 uppercase block">
                            {isVi ? m.labelVi : m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Architectural Visual */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-warm-200 border border-warm-300 group">
                    <img
                      src={chapter.image}
                      alt={chapter.name}
                      className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                    />
                  </div>

                  <div className="flex items-start justify-between text-xs font-mono text-warm-600 pt-2 border-t border-warm-300 gap-4">
                    <p className="tracking-wide">
                      PLATE {chapter.number} &bull; {caption}
                    </p>
                    <span className="text-warm-500 whitespace-nowrap">MATRIX ARCHIVE</span>
                  </div>

                  <div className="p-8 bg-warm-200/50 border border-warm-300 space-y-4 mt-8">
                    <span className="text-xs font-mono tracking-widest text-burgundy font-semibold uppercase">
                      {t.resonance}
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-light text-[#111111] leading-snug">
                      {tagline}
                    </p>
                    <p className="text-xs text-warm-600 font-sans leading-relaxed">
                      {t.resonanceDesc}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Editorial Chapter Wrap-Up */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="p-10 md:p-16 bg-[#111111] text-[#F5F3EE] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono tracking-[0.3em] text-warm-400 uppercase">
              {t.bannerTag}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.bannerTitle}
            </h3>
            <p className="text-sm text-warm-400 font-sans leading-relaxed">
              {t.bannerDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#F5F3EE] text-[#111111] hover:bg-burgundy hover:text-white text-xs tracking-[0.25em] font-medium uppercase transition-colors inline-flex items-center justify-center gap-3"
            >
              <span>{t.bannerBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
