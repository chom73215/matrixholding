import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { getNewsData } from '../data/content';
import type { NewsArticle } from '../data/content';
import { ArticleModal } from '../components/ArticleModal';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].news;
  const newsList = getNewsData(language);

  const categories = [
    { key: 'ALL', label: language === 'vi' ? 'TẤT CẢ' : 'ALL' },
    { key: 'INSIGHTS', label: language === 'vi' ? 'GÓC NHÌN' : 'INSIGHTS' },
    { key: 'ECOSYSTEM', label: language === 'vi' ? 'HỆ SINH THÁI' : 'ECOSYSTEM' },
    { key: 'VENTURES', label: language === 'vi' ? 'ĐẦU TƯ' : 'VENTURES' },
    { key: 'NETWORK', label: language === 'vi' ? 'MẠNG LƯỚI' : 'NETWORK' },
  ];

  const filteredNews = newsList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      item.category.toUpperCase() === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-[500px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/5">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00FF9D]" />
            {t.tag}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.2] sm:leading-[1.22]">
            <span className="block mb-2">{t.heroTitle1}</span>
            <span className="block text-[#00F0FF] mb-2">{t.heroTitle2}</span>
            <span className="block text-zinc-500">{t.heroTitle3}</span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
            {t.heroDesc}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-14 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pt-8 border-t border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded text-xs font-mono tracking-wider uppercase transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-[#00F0FF] text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-[#0D1117] text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#0D1117] border border-white/10 focus:border-[#00F0FF] rounded-lg pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* 2. NEWS GRID */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredNews.length === 0 ? (
          <div className="py-24 text-center text-zinc-500 font-mono text-sm">
            {t.noResults}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <motion.article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                whileHover={{ y: -4 }}
                className="group cursor-pointer rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#00F0FF]/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Image with Zoom on hover */}
                  <div className="relative h-52 w-full overflow-hidden bg-black/40">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase text-[#00F0FF] border border-[#00F0FF]/30">
                      {article.category}
                    </span>
                  </div>

                  {/* Content details */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00FF9D]">
                  <span>{t.readFull}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
};
