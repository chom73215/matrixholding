import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].nav;

  const NAV_LINKS = [
    { name: t.about, path: '/about', num: '01' },
    { name: t.ecosystem, path: '/ecosystem', num: '02' },
    { name: t.news, path: '/news', num: '03' },
    { name: t.careers, path: '/careers', num: '04' },
    { name: t.contact, path: '/contact', num: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F3EE]/95 backdrop-blur-md py-4 border-b border-warm-300 shadow-sm'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex flex-col text-left text-[#111111]"
            aria-label="Matrix Holding Home"
          >
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.2em] leading-none transition-colors group-hover:text-burgundy">
              MATRIX
            </span>
            <span className="font-sans text-xs tracking-[0.3em] font-semibold text-warm-600 mt-1 uppercase transition-colors group-hover:text-warm-900">
              HOLDING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs lg:text-sm tracking-[0.15em] font-medium transition-all duration-300 py-1.5 ${
                    isActive
                      ? 'text-burgundy font-semibold'
                      : 'text-warm-700 hover:text-[#111111]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-burgundy transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Language Switcher + Inquire + Mobile Toggle */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center text-xs lg:text-sm tracking-[0.15em] font-medium border-b border-[#111111] pb-0.5 text-[#111111] hover:text-burgundy hover:border-burgundy transition-all duration-300"
            >
              {t.inquire} &rarr;
            </Link>

            {/* Mobile Hamburger / Close button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-xs sm:text-sm tracking-[0.15em] font-medium py-2 px-3.5 border border-warm-400 rounded-none bg-warm-100 hover:bg-warm-200 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? t.close : t.menu}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F3EE] flex flex-col justify-between p-8 pt-28 transition-all duration-700 md:hidden overflow-y-auto ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-6 mt-2">
          <div className="flex items-center justify-between border-b border-warm-300 pb-3">
            <span className="text-xs font-mono tracking-widest text-warm-600 uppercase">
              {t.directory}
            </span>
            <LanguageSwitcher />
          </div>

          {NAV_LINKS.map((link) => (
            <div key={link.path} className="border-b border-warm-300 pb-4">
              <NavLink
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline justify-between group py-1 ${
                    isActive ? 'text-burgundy' : 'text-[#111111]'
                  }`
                }
              >
                <span className="font-serif text-3xl font-light tracking-wide">
                  {link.name}
                </span>
                <span className="text-sm font-mono text-warm-600 group-hover:text-burgundy transition-colors">
                  {link.num}
                </span>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-6 border-t border-warm-300 mt-6">
          <div className="text-xs font-mono tracking-wider text-warm-600 uppercase">
            {t.communication}
          </div>
          <div className="text-sm font-sans space-y-1.5">
            <p className="text-warm-900 font-medium">{COMPANY_INFO.email}</p>
            <p className="text-warm-700">{COMPANY_INFO.phone}</p>
            <p className="text-xs sm:text-sm text-warm-600 pt-0.5">{COMPANY_INFO.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
