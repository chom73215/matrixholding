import PageHero from '../components/PageHero/PageHero'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import { getCoreValues } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './About.module.css'

export default function About() {
  const { t, language } = useLanguage()
  const currentCoreValues = getCoreValues(language)

  return (
    <div className={styles.about}>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <PageHero
        label={t.about.pageHeroLabel}
        title={t.about.pageHeroTitle}
        subtitle={t.about.pageHeroSub}
      />

      {/* ── CHÚNG TÔI LÀ AI? ─────────────────────────────────── */}
      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.editorialGrid}>
            <div className={styles.editorialMeta}>
              <div className="section-label">{t.about.whoLabel}</div>
              <h2 className={styles.metaTitle}>{t.about.metaTitle}</h2>
            </div>
            <div className={styles.editorialBody}>
              <p className={styles.leadPara}>{t.about.leadPara}</p>
              <p className={styles.bodyPara}>{t.about.bodyPara1}</p>
              <p className={styles.bodyPara}>{t.about.bodyPara2}</p>

              <div className={styles.demoNotice}>
                <span className={styles.demoBadge}>{t.common.demoBadge}</span>
                <span>{t.common.demoNotice}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TẦM NHÌN ────────────────────────────────────────── */}
      <Section bg="gray" padding="large">
        <div className="container">
          <div className={styles.visionMissionBlock}>
            <div className="section-label">{t.about.visionLabel}</div>
            <div className={styles.largeHeadingWrapper}>
              <span className={styles.labelGhost}>{t.about.visionGhost}</span>
              <h2 className={styles.hugeHeading}>{t.about.visionHeading}</h2>
            </div>
            <p className={styles.vmSubtext}>{t.about.visionSubtext}</p>
          </div>
        </div>
      </Section>

      {/* ── SỨ MỆNH ─────────────────────────────────────────── */}
      <Section bg="dark" padding="large">
        <div className="container">
          <div className={styles.visionMissionBlock}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>
              {t.about.missionLabel}
            </div>
            <div className={styles.largeHeadingWrapper}>
              <span className={styles.labelGhostDark}>{t.about.missionGhost}</span>
              <h2 className={[styles.hugeHeading, styles.hugeHeadingLight].join(' ')}>
                {t.about.missionHeading}
              </h2>
            </div>
            <p className={[styles.vmSubtext, styles.vmSubtextLight].join(' ')}>
              {t.about.missionSubtext}
            </p>
          </div>
        </div>
      </Section>

      {/* ── GIÁ TRỊ CỐT LÕI ──────────────────────────────────── */}
      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.valuesHeader}>
            <div>
              <div className="section-label">{t.about.valuesLabel}</div>
              <h2 className={styles.valuesTitle}>{t.about.valuesTitle}</h2>
            </div>
            <p className={styles.valuesSubtitle}>{t.about.valuesSubtitle}</p>
          </div>

          <div className={styles.valuesAsymmetricGrid}>
            {currentCoreValues.map((val, idx) => (
              <div
                key={val.id}
                className={[
                  styles.valueCard,
                  idx === 0 || idx === 3 ? styles.valueCardAccent : '',
                ].join(' ')}
              >
                <div className={styles.valueTop}>
                  <span className={styles.valueNumber}>{val.id}</span>
                  <span className={styles.valueEn}>{val.en}</span>
                </div>
                <div className={styles.valueBottom}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.aboutCta}>
            <div className={styles.aboutCtaText}>
              <h3>{t.about.bottomCtaTitle}</h3>
              <p>{t.about.bottomCtaDesc}</p>
            </div>
            <Button to="/he-sinh-thai" variant="primary" size="md">
              {t.about.bottomCtaBtn}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
