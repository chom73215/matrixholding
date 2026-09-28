import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  dark?: boolean;
}

export default function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.2em] select-none">
      <button
        onClick={() => setLanguage('vi')}
        className={`transition-colors py-0.5 px-1 ${
          language === 'vi'
            ? dark
              ? 'text-white font-bold border-b border-white'
              : 'text-burgundy font-bold border-b border-burgundy'
            : dark
              ? 'text-warm-500 hover:text-warm-300'
              : 'text-warm-600 hover:text-[#111111]'
        }`}
        title="Tiếng Việt"
        aria-label="Chuyển sang Tiếng Việt"
      >
        VI
      </button>

      <span className={dark ? 'text-warm-600' : 'text-warm-400'}>/</span>

      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors py-0.5 px-1 ${
          language === 'en'
            ? dark
              ? 'text-white font-bold border-b border-white'
              : 'text-burgundy font-bold border-b border-burgundy'
            : dark
              ? 'text-warm-500 hover:text-warm-300'
              : 'text-warm-600 hover:text-[#111111]'
        }`}
        title="English"
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
