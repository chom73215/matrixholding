import React from 'react';
import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import type { NewsArticle } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].news;

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#070A0F] border border-[#00F0FF]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1117]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-mono uppercase rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
              {article.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy Link"
              className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#00FF9D]" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#070A0F]/30 to-transparent" />
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="text-[#00F0FF]">{t.editorialDesk}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
            {article.title}
          </h2>

          <p className="text-base text-zinc-300 font-medium leading-relaxed mb-6 border-l-2 border-[#00F0FF] pl-4 italic">
            "{article.summary}"
          </p>

          <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed whitespace-pre-line border-t border-white/5 pt-6">
            {article.content}
          </div>

          {/* Bottom Close / Return */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs font-mono text-zinc-500">
              ID: {article.id}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/20 text-xs font-mono tracking-wider transition-all"
            >
              {t.closeArticle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
