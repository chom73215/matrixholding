import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/PageHero/PageHero'
import Section from '../components/Section/Section'
import ContactForm from '../components/ContactForm/ContactForm'
import { useLanguage } from '../context/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className={styles.contactPage}>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <PageHero
        label={t.contact.pageHeroLabel}
        title={t.contact.pageHeroTitle}
        subtitle={t.contact.pageHeroSub}
      />

      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.grid}>
            {/* ── Left Column: Contact Info ──────────────────────── */}
            <div className={styles.infoCol}>
              <div className="section-label">{t.contact.infoLabel}</div>
              <h2 className={styles.infoTitle}>{t.contact.infoTitle}</h2>
              <p className={styles.infoDesc}>{t.contact.infoDesc}</p>

              <div className={styles.infoList}>
                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.emailLabel}</span>
                    <a
                      href="mailto:matrixholding.support@gmail.com"
                      className={styles.infoValue}
                    >
                      matrixholding.support@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.phoneLabel}</span>
                    <a href="tel:+84964243026" className={styles.infoValue}>
                      (+84) 964 243 026
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.addressLabel}</span>
                    <p className={styles.infoValue} style={{ whiteSpace: 'pre-line' }}>
                      {t.contact.addressValue}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{t.contact.hoursLabel}</span>
                    <p className={styles.infoValue}>{t.contact.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Form ─────────────────────────────── */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formCardTitle}>{t.contact.formTitle}</h3>
                  <p className={styles.formCardSub}>{t.contact.formSub}</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* ── Map Placeholder ─────────────────────────────────── */}
          <div className={styles.mapSection}>
            <div className={styles.mapCard}>
              <div className={styles.mapVisual}>
                <div className={styles.mapPin}>
                  <MapPin size={24} className={styles.pinIcon} />
                  <div className={styles.pinPulse} />
                </div>
                <div className={styles.mapOverlay}>
                  <span className={styles.mapTag}>{t.contact.mapTag}</span>
                  <h4>{t.contact.mapAddress}</h4>
                  <p>{t.contact.mapCountry}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
