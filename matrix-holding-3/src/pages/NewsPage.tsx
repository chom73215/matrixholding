import { useState } from 'react';
import { NEWS_DATA } from '../data/content';
import type { NewsArticle } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import ArticleModal from '../components/ArticleModal';
import { ArrowUpRight, Search } from 'lucide-react';

export default function NewsPage() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].newsPage;
  const isVi = language === 'vi';

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const CATEGORIES = [
    { key: 'ALL', label: isVi ? 'TẤT CẢ' : 'ALL' },
    { key: 'EDITORIAL', label: isVi ? 'XÃ LUẬN' : 'EDITORIAL' },
    { key: 'VENTURES', label: isVi ? 'ĐẦU TƯ' : 'VENTURES' },
    { key: 'PERSPECTIVES', label: isVi ? 'GÓC NHÌN' : 'PERSPECTIVES' },
    { key: 'ECOSYSTEM', label: isVi ? 'HỆ SINH THÁI' : 'ECOSYSTEM' },
  ];

  const featuredArticle = NEWS_DATA[0];

  const filteredArticles = NEWS_DATA.filter((item) => {
    const matchesCat =
      selectedCategory === 'ALL' || item.category === selectedCategory;
    const title = isVi ? item.titleVi : item.title;
    const excerpt = isVi ? item.excerptVi : item.excerpt;
    const matchesQuery =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full bg-[#F5F3EE] text-[#111111] pt-28">
      {/* ========================================================
          1. HEADER
          NEWS & INSIGHTS (Digital magazine aesthetic)
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24 border-b border-warm-300">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-warm-300 pb-8 mb-12 gap-8">
          <div>
            <p className="text-xs font-mono tracking-[0.35em] text-warm-600 uppercase mb-4">
              {t.tag}
            </p>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#111111] leading-[0.9] tracking-tight">
              {t.title1} <br />
              <span className="font-serif font-normal text-burgundy">{t.title2}</span>
            </h1>
          </div>

          <div className="lg:max-w-md space-y-3 font-sans text-sm text-warm-700">
            <p className="leading-relaxed">
              {t.sub}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-warm-600 pt-2 border-t border-warm-300">
              <span>{isVi ? 'ĐỊNH KỲ: HAI TUẦN / ẤN PHẨM' : 'FREQUENCY: BI-WEEKLY'}</span>
              <span>&bull;</span>
              <span>VOL. 2026 EDITION</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. FEATURED ARTICLE (Image lớn, format digital magazine)
            ======================================================== */}
        {(() => {
          const title = isVi ? featuredArticle.titleVi : featuredArticle.title;
          const excerpt = isVi ? featuredArticle.excerptVi : featuredArticle.excerpt;
          const category = isVi ? featuredArticle.categoryVi : featuredArticle.category;
          const readTime = isVi ? featuredArticle.readTimeVi : featuredArticle.readTime;

          return (
            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-warm-200/40 p-6 sm:p-10 border border-warm-300 hover:border-warm-500 transition-all duration-300"
            >
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-warm-200 relative">
                <img
                  src={featuredArticle.image}
                  alt={title}
                  className="w-full h-full object-cover filter grayscale contrast-115 img-editorial"
                />
                <span className="absolute top-4 left-4 bg-[#111111] text-white text-xs font-mono tracking-widest px-3 py-1.5 uppercase">
                  {t.leadTag}
                </span>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-warm-600">
                  <span>{featuredArticle.date}</span>
                  <span>&bull;</span>
                  <span className="text-burgundy uppercase font-semibold">{category}</span>
                  <span>&bull;</span>
                  <span>{readTime}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111] group-hover:text-burgundy transition-colors leading-tight">
                  {title}
                </h2>

                <p className="text-sm text-warm-700 font-sans leading-relaxed">
                  {excerpt}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center text-xs tracking-[0.2em] font-medium border-b border-[#111111] group-hover:border-burgundy group-hover:text-burgundy pb-1 transition-colors">
                    {t.readLead}
                  </span>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ========================================================
          3. CONTROLS: CATEGORY FILTER & SEARCH
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-warm-300 pb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-xs font-mono tracking-widest text-warm-500 uppercase mr-2 hidden sm:inline">
              {isVi ? 'MỤC LỤC:' : 'INDEX:'}
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`text-xs font-mono tracking-widest px-3 py-1.5 transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-[#111111] text-[#F5F3EE]'
                    : 'text-warm-700 hover:text-black border border-warm-300 hover:border-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-warm-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent border-b border-warm-400 pl-8 pr-3 py-1.5 text-xs text-[#111111] placeholder-warm-500 focus:outline-none focus:border-black transition-colors rounded-none font-sans"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          4. NEWS LIST LAYOUT
          Format: Date | Category | Title | →
          ======================================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="border-t border-warm-300">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center text-sm font-mono text-warm-600">
              {t.noResults}
            </div>
          ) : (
            filteredArticles.map((article) => {
              const title = isVi ? article.titleVi : article.title;
              const excerpt = isVi ? article.excerptVi : article.excerpt;
              const category = isVi ? article.categoryVi : article.category;

              return (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group cursor-pointer py-8 border-b border-warm-300 hover:bg-warm-200/40 transition-colors px-2 sm:px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                    {/* Date */}
                    <div className="md:col-span-2 font-mono text-xs sm:text-sm text-warm-600 tracking-wider">
                      {article.date}
                    </div>

                    {/* Category */}
                    <div className="md:col-span-2">
                      <span className="text-[11px] font-mono tracking-widest text-burgundy font-semibold uppercase">
                        {category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-7">
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#111111] group-hover:text-burgundy transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-warm-600 font-sans mt-2 line-clamp-1">
                        {excerpt}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="md:col-span-1 flex justify-end">
                      <span className="w-8 h-8 rounded-full border border-warm-400 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
