import { useState } from 'react'
import { ArrowUpRight, ChevronUp, MapPin, Briefcase } from 'lucide-react'
import PageHero from '../components/PageHero/PageHero'
import Section from '../components/Section/Section'
import Button from '../components/Button/Button'
import { getJobs, getCultureValues } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './Careers.module.css'

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)
  const { t, language } = useLanguage()

  const currentJobs = getJobs(language)
  const currentCultureValues = getCultureValues(language)

  const toggleJob = (id) => {
    setExpandedJob((prev) => (prev === id ? null : id))
  }

  return (
    <div className={styles.careersPage}>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <PageHero
        label={t.careers.pageHeroLabel}
        title={t.careers.pageHeroTitle}
        subtitle={t.careers.pageHeroSub}
      />

      {/* ── Open Positions ──────────────────────────────────── */}
      <Section bg="white" padding="large">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className="section-label">{t.careers.openPositionsLabel}</div>
              <h2 className={styles.sectionTitle}>{t.careers.openPositionsTitle}</h2>
            </div>
            <span className={styles.positionCount}>
              {currentJobs.length} {t.careers.positionsCount}
            </span>
          </div>

          <div className={styles.jobsList}>
            {currentJobs.map((job) => {
              const isExpanded = expandedJob === job.id

              return (
                <div key={job.id} className={styles.jobRowWrapper}>
                  <div
                    className={[
                      styles.jobRow,
                      isExpanded ? styles.jobRowActive : '',
                    ].join(' ')}
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className={styles.jobMain}>
                      <span className={styles.jobIndex}>0{job.id}</span>
                      <h3 className={styles.jobPosition}>{job.position}</h3>
                    </div>

                    <div className={styles.jobMeta}>
                      <span className={styles.jobDept}>
                        <Briefcase size={13} />
                        {job.department}
                      </span>
                      <span className={styles.jobLoc}>
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span className={styles.jobType}>{job.type}</span>
                    </div>

                    <div className={styles.jobArrow}>
                      {isExpanded ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ArrowUpRight size={18} />
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  {isExpanded && (
                    <div className={styles.jobDetail}>
                      <p className={styles.jobDesc}>{job.description}</p>
                      <div className={styles.jobDetailFooter}>
                        <span className={styles.demoNote}>
                          {t.careers.demoPositionNote}
                        </span>
                        <Button to="/lien-he" variant="primary" size="sm">
                          {t.careers.applyNow}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ── Why Matrix? ─────────────────────────────────────── */}
      <Section bg="gray" padding="large">
        <div className="container">
          <div className={styles.whyHeader}>
            <div className="section-label">{t.careers.whyLabel}</div>
            <h2 className={styles.whyTitle}>{t.careers.whyTitle}</h2>
            <p className={styles.whySub}>{t.careers.whySub}</p>
          </div>

          <div className={styles.whyGrid}>
            {currentCultureValues.map((val, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyGhost}>0{idx + 1}</span>
                <h3 className={styles.whyCardTitle}>{val.title}</h3>
                <h4 className={styles.whyCardSub}>{val.titleVi}</h4>
                <p className={styles.whyCardDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Final Careers CTA ───────────────────────────────── */}
      <section className={styles.careersCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>
              {t.careers.ctaLabel}
            </div>
            <h2 className={styles.ctaHeading}>
              {t.careers.ctaHeading1}
              <br />
              {t.careers.ctaHeading2}
            </h2>
            <p className={styles.ctaText}>{t.careers.ctaText}</p>
            <div className={styles.ctaBtnWrapper}>
              <Button to="/lien-he" variant="gold" size="lg">
                {t.careers.ctaBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
