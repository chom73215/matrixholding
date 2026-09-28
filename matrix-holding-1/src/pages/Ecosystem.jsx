import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, Share2, Layers, TrendingUp } from 'lucide-react'
import PageHero from '../components/PageHero/PageHero'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import { getEcosystems } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './Ecosystem.module.css'

export default function Ecosystem() {
  const { hash } = useLocation()
  const { t, language } = useLanguage()
  const currentEcosystems = getEcosystems(language)

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [hash])

  const icons = [Share2, Layers, TrendingUp]

  return (
    <div className={styles.ecosystemPage}>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <PageHero
        label={t.ecosystem.pageHeroLabel}
        title={t.ecosystem.pageHeroTitle}
        subtitle={t.ecosystem.pageHeroSub}
      />

      {/* ── Overview Section ─────────────────────────────────── */}
      <Section bg="white" padding="compact">
        <div className="container">
          <div className={styles.introBlock}>
            <div className="section-label">{t.ecosystem.overviewLabel}</div>
            <p className={styles.introLead}>{t.ecosystem.overviewLead}</p>
          </div>
        </div>
      </Section>

      {/* ── Horizontal Storytelling Units ────────────────────── */}
      <div className={styles.unitsWrapper}>
        {currentEcosystems.map((eco, index) => {
          const IconComponent = icons[index]
          const isEven = index % 2 !== 0

          return (
            <section
              key={eco.id}
              id={eco.slug}
              className={[
                styles.storySection,
                isEven ? styles.storySectionEven : styles.storySectionOdd,
              ].join(' ')}
            >
              <div className="container">
                <div
                  className={[
                    styles.storyGrid,
                    isEven ? styles.storyGridRev : '',
                  ].join(' ')}
                >
                  {/* Story Text */}
                  <div className={styles.storyContent}>
                    <div className={styles.storyHeader}>
                      <span className={styles.storyNumber}>{eco.id}</span>
                      <span className={styles.storySublabel}>
                        {t.ecosystem.unitTag}
                      </span>
                    </div>

                    <div className={styles.storyTitleGroup}>
                      <h2 className={styles.storyTitle}>{eco.name}</h2>
                      <p className={styles.storyTagline}>{eco.tagline}</p>
                    </div>

                    <div className="gold-divider" />

                    <p className={styles.storyDesc}>{eco.description}</p>
                    <p className={styles.storyDetail}>{eco.detail}</p>

                    <div className={styles.storyFeatures}>
                      <div className={styles.featureItem}>
                        <div className={styles.featureDot} />
                        <span>{t.ecosystem.unitFeature1}</span>
                      </div>
                      <div className={styles.featureItem}>
                        <div className={styles.featureDot} />
                        <span>{t.ecosystem.unitFeature2}</span>
                      </div>
                      <div className={styles.featureItem}>
                        <div className={styles.featureDot} />
                        <span>{t.ecosystem.unitFeature3}</span>
                      </div>
                    </div>

                    <div className={styles.storyCta}>
                      <Button to="/lien-he" variant="primary" size="md">
                        {t.ecosystem.partnerBtnPrefix} {eco.name.toUpperCase()}
                      </Button>
                    </div>
                  </div>

                  {/* Story Visual */}
                  <div className={styles.storyVisual}>
                    <div className={styles.visualCard}>
                      <div className={styles.visualIconBox}>
                        <IconComponent size={32} className={styles.visualIcon} />
                      </div>
                      <div className={styles.visualLines}>
                        <div className={styles.visLine1} />
                        <div className={styles.visLine2} />
                        <div className={styles.visLine3} />
                      </div>
                      <div className={styles.visualMeta}>
                        <span className={styles.visualNumber}>{eco.id}</span>
                        <span className={styles.visualName}>{eco.name}</span>
                        <span className={styles.visualBadge}>
                          {t.ecosystem.cardBadge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── Bottom Synergies Section ─────────────────────────── */}
      <Section bg="dark" padding="large">
        <div className="container">
          <div className={styles.synergyHeader}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>
              {t.ecosystem.synergyLabel}
            </div>
            <h2 className={styles.synergyTitle}>{t.ecosystem.synergyTitle}</h2>
            <p className={styles.synergySub}>{t.ecosystem.synergySub}</p>
          </div>

          <div className={styles.synergyGrid}>
            <div className={styles.synergyCard}>
              <span className={styles.synergyStep}>{t.ecosystem.step1}</span>
              <h4>{t.ecosystem.step1Title}</h4>
              <p>{t.ecosystem.step1Desc}</p>
            </div>
            <div className={styles.synergyArrow}>
              <ArrowRight size={24} />
            </div>
            <div className={styles.synergyCard}>
              <span className={styles.synergyStep}>{t.ecosystem.step2}</span>
              <h4>{t.ecosystem.step2Title}</h4>
              <p>{t.ecosystem.step2Desc}</p>
            </div>
            <div className={styles.synergyArrow}>
              <ArrowRight size={24} />
            </div>
            <div className={styles.synergyCard}>
              <span className={styles.synergyStep}>{t.ecosystem.step3}</span>
              <h4>{t.ecosystem.step3Title}</h4>
              <p>{t.ecosystem.step3Desc}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
