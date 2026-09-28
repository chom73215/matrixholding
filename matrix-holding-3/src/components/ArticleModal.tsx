import { useEffect } from 'react';
import type { NewsArticle } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const { language } = useLanguage();
  const c = UI_TRANSLATIONS[language].common;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const title = language === 'vi' ? article.titleVi : article.title;
  const excerpt = language === 'vi' ? article.excerptVi : article.excerpt;
  const category = language === 'vi' ? article.categoryVi : article.category;
  const readTime = language === 'vi' ? article.readTimeVi : article.readTime;
  const author = language === 'vi' ? article.authorVi : article.author;
  const paragraphs = language === 'vi' ? article.contentVi : article.content;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(c.copied);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#F5F3EE] text-[#111111] shadow-2xl my-8 border border-warm-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-300 bg-warm-200/50">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-warm-600">
            <span>NO. {article.number}</span>
            <span>&bull;</span>
            <span className="text-burgundy uppercase font-semibold">{category}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="p-1.5 text-warm-600 hover:text-black transition-colors"
              title={c.share}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs tracking-widest text-warm-700 hover:text-black transition-colors px-2 py-1 border border-warm-300 hover:border-black"
            >
              <span>{c.close}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 md:p-16 max-w-3xl mx-auto space-y-8">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-warm-600 border-b border-warm-300 pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-warm-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-warm-500" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-warm-500" />
              <span>{author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
            {title}
          </h1>

          {/* Lead Excerpt */}
          <p className="text-lg sm:text-xl font-serif italic text-warm-700 border-l-2 border-burgundy pl-6 py-1 leading-relaxed">
            &ldquo;{excerpt}&rdquo;
          </p>

          {/* Article Image */}
          {article.image && (
            <div className="space-y-2 pt-2">
              <div className="aspect-[16/9] w-full overflow-hidden bg-warm-200">
                <img
                  src={article.image}
                  alt={title}
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>
              <p className="text-[11px] font-mono text-warm-500 tracking-wider">
                FIG. ARCHIVAL VISUAL &bull; MATRIX DISPATCH {article.number}
              </p>
            </div>
          )}

          {/* Article Paragraphs */}
          <div className="space-y-6 text-warm-800 leading-relaxed font-sans text-base sm:text-lg pt-4 border-t border-warm-300">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-burgundy">
                {p}
              </p>
            ))}
          </div>

          {/* Footer of article */}
          <div className="pt-12 border-t border-warm-300 flex items-center justify-between">
            <span className="text-xs font-mono text-warm-500">
              MATRIX HOLDING &bull; {language === 'vi' ? 'LƯU TRỮ ẤN PHẨM' : 'EDITORIAL ARCHIVE'}
            </span>
            <button
              onClick={onClose}
              className="text-xs tracking-[0.2em] font-medium border-b border-[#111111] pb-1 text-[#111111] hover:text-burgundy hover:border-burgundy transition-colors"
            >
              {c.back}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
