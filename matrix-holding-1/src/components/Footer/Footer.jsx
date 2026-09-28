import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/gioi-thieu' },
    { label: t.nav.ecosystem, to: '/he-sinh-thai' },
    { label: t.nav.news, to: '/tin-tuc' },
    { label: t.nav.careers, to: '/tuyen-dung' },
    { label: t.nav.contact, to: '/lien-he' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <span className={styles.logoMain}>MATRIX</span>
                <span className={styles.logoSub}>HOLDING</span>
              </Link>
              <p className={styles.tagline}>
                {t.footer.tagline1}
                <br />
                {t.footer.tagline2}
              </p>
            </div>

            {/* Navigation */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t.footer.navTitle}</h4>
              <nav className={styles.nav}>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={styles.navLink}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Ecosystem */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t.footer.ecoTitle}</h4>
              <nav className={styles.nav}>
                <Link to="/he-sinh-thai" className={styles.navLink}>
                  Matrix Network
                </Link>
                <Link to="/he-sinh-thai" className={styles.navLink}>
                  Matrix Connect
                </Link>
                <Link to="/he-sinh-thai" className={styles.navLink}>
                  Matrix Ventures
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t.footer.contactTitle}</h4>
              <div className={styles.contactList}>
                <a
                  href="mailto:matrixholding.support@gmail.com"
                  className={styles.contactItem}
                >
                  <Mail size={13} />
                  matrixholding.support@gmail.com
                </a>
                <a href="tel:+84964243026" className={styles.contactItem}>
                  <Phone size={13} />
                  (+84) 964 243 026
                </a>
                <span className={styles.contactItem}>
                  <MapPin size={13} />
                  {t.footer.addressText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copy}>{t.footer.copyright}</p>
          <Link to="/lien-he" className={styles.bottomCta}>
            {t.footer.contactNow} <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
