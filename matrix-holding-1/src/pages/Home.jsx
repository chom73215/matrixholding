import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Button from '../components/Button/Button'
import Section from '../components/Section/Section'
import EcosystemCard from '../components/EcosystemCard/EcosystemCard'
import NewsCard from '../components/NewsCard/NewsCard'
import MatrixVisual from '../components/MatrixVisual/MatrixVisual'
import { getEcosystems, getNewsArticles } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './Home.module.css'

export default function Home() {
  const { t, language } = useLanguage()
  const currentEcosystems = getEcosystems(language)
  const previewNews = getNewsArticles(language).slice(0, 3)

  return (
    <div className={styles.home}>
      {/* ── HERO SECTION (~90vh) ────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGridLines} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagline}>
              <span className={styles.heroTaglineDot} />
              <span>{t.home.heroTagline}</span>
            </div>

            <h1 className={styles.heroHeading}>
              {t.home.heroHeading1}
              <br />
              {t.home.heroHeading2}
              <br />
              <span className={styles.goldText}>{t.home.heroHeading3}</span>
              <br />
              {t.home.heroHeading4}
            </h1>

            <p className={styles.heroSubheading}>{t.home.heroSubheading}</p>

            <div className={styles.heroCta}>
              <Button to="/he-sinh-thai" variant="gold" size="lg">
                {t.home.heroCtaExplore}
              </Button>
              <Button to="/lien-he" variant="outline" size="lg">
                {t.home.heroCtaContact}
              </Button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <MatrixVisual />
          </div>
        </div>

        <div className={styles.heroBottomBar}>
          <div className={styles.heroScrollIndicator}>
            <span>{t.home.heroScroll}</span>
            <div className={styles.scrollLine} />
          </div>
          <div className={styles.heroStatsMini}>
            <span>{t.home.heroUnitsCount}</span>
            <span className={styles.miniDot}>•</span>
            <span>{t.home.heroEcosystemCount}</span>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE SECTION ──────────────────────────────── */}
      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.whoWeAreGrid}>
            <div className={styles.whoLeft}>
              <div className="section-label">{t.home.whoLabel}</div>
              <h2 className={styles.whoTitle}>{t.home.whoTitle}</h2>
              <div className="gold-divider" />
              <p className={styles.whoDesc}>{t.home.whoDesc}</p>
              <div className={styles.whoLink}>
                <Link to="/gioi-thieu" className={styles.textLink}>
                  <span>{t.home.whoLink}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className={styles.whoRight}>
              <div className={styles.statBox}>
                <div className="stat-number">{t.home.stat1Number}</div>
                <div className={styles.statLabel}>{t.home.stat1Label}</div>
                <p className={styles.statDesc}>{t.home.stat1Desc}</p>
              </div>

              <div className={styles.statDivider} />

              <div className={styles.statBox}>
                <div className="stat-number">{t.home.stat2Number}</div>
                <div className={styles.statLabel}>{t.home.stat2Label}</div>
                <p className={styles.statDesc}>{t.home.stat2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HỆ SINH THÁI MATRIX ─────────────────────────────── */}
      <Section bg="gray" padding="large">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className="section-label">{t.home.ecoLabel}</div>
              <h2 className={styles.sectionTitle}>{t.home.ecoTitle}</h2>
            </div>
            <Link to="/he-sinh-thai" className={styles.headerLink}>
              <span>{t.home.ecoAll}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className={styles.ecosystemGrid}>
            {currentEcosystems.map((eco) => (
              <EcosystemCard
                key={eco.id}
                id={eco.id}
                name={eco.name}
                description={eco.description}
                to={`/he-sinh-thai#${eco.slug}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ── INSIGHTS / NEWS SECTION ─────────────────────────── */}
      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className="section-label">{t.home.insightsLabel}</div>
              <h2 className={styles.sectionTitle}>{t.home.insightsTitle}</h2>
            </div>
            <Link to="/tin-tuc" className={styles.headerLink}>
              <span>{t.home.insightsAll}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className={styles.newsGrid}>
            {previewNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── READY TO CONNECT? (CTA) ─────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBgLines} />
        <div className="container">
          <div className={styles.ctaContent}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>
              {t.home.ctaLabel}
            </div>
            <h2 className={styles.ctaHeading}>
              {t.home.ctaHeading1}
              <br />
              {t.home.ctaHeading2}
            </h2>
            <p className={styles.ctaDesc}>{t.home.ctaDesc}</p>
            <div className={styles.ctaAction}>
              <Button to="/lien-he" variant="gold" size="lg">
                {t.home.ctaBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
