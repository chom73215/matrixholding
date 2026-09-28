import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react'
import { useScrollY } from '../../hooks/useInView'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t, language, setLanguage, isVi, isEn } = useLanguage()

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/gioi-thieu' },
    { label: t.nav.ecosystem, to: '/he-sinh-thai' },
    { label: t.nav.news, to: '/tin-tuc' },
    { label: t.nav.careers, to: '/tuyen-dung' },
  ]

  const isHeroPage = location.pathname === '/'
  const scrolled = scrollY > 60
  const isDark = isHeroPage && !scrolled && !menuOpen

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={[
        styles.navbar,
        isDark ? styles.dark : styles.light,
        scrolled && !menuOpen ? styles.scrolled : '',
      ].join(' ')}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMain}>MATRIX</span>
          <span className={styles.logoSub}>HOLDING</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls (Lang switcher + CTA) */}
        <div className={styles.actionControls}>
          {/* Language Switcher */}
          <div className={styles.langSwitch} role="group" aria-label="Language selector">
            <Globe size={13} className={styles.langIcon} />
            <button
              type="button"
              onClick={() => setLanguage('vi')}
              className={[styles.langBtn, isVi ? styles.langActive : ''].join(' ')}
              title="Tiếng Việt"
            >
              VI
            </button>
            <span className={styles.langDivider}>/</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={[styles.langBtn, isEn ? styles.langActive : ''].join(' ')}
              title="English"
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <Link to="/lien-he" className={styles.ctaBtn}>
            <span>{t.nav.contact}</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={[styles.mobileMenu, menuOpen ? styles.open : ''].join(' ')}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={{ '--i': i }}
              className={({ isActive }) =>
                [styles.mobileLink, isActive ? styles.active : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/lien-he" className={styles.mobileCta} style={{ '--i': navLinks.length }}>
            {t.nav.contact} <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Language Switcher */}
          <div className={styles.mobileLangBox}>
            <span className={styles.mobileLangLabel}>Ngôn ngữ / Language:</span>
            <div className={styles.mobileLangBtns}>
              <button
                type="button"
                className={[styles.mobileLangBtn, isVi ? styles.mobileLangActive : ''].join(' ')}
                onClick={() => setLanguage('vi')}
              >
                Tiếng Việt (VI)
              </button>
              <button
                type="button"
                className={[styles.mobileLangBtn, isEn ? styles.mobileLangActive : ''].join(' ')}
                onClick={() => setLanguage('en')}
              >
                English (EN)
              </button>
            </div>
          </div>
        </nav>

        <div className={styles.mobileFooter}>
          <p>matrixholding.support@gmail.com</p>
          <p>(+84) 964 243 026</p>
        </div>
      </div>
    </header>
  )
}
