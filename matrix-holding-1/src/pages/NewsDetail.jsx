import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Share2 } from 'lucide-react'
import Section from '../components/Section/Section'
import { getNewsArticles } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './NewsDetail.module.css'

export default function NewsDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, language } = useLanguage()

  const allArticles = getNewsArticles(language)
  const article = allArticles.find((a) => a.slug === slug) || allArticles[0]
  const related = allArticles.filter((a) => a.id !== article.id).slice(0, 2)

  return (
    <article className={styles.page}>
      {/* ── Detail Hero ─────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <button onClick={() => navigate('/tin-tuc')} className={styles.backBtn}>
            <ArrowLeft size={16} />
            <span>{t.newsDetail.backBtn}</span>
          </button>

          <div className={styles.heroMeta}>
            <span className={styles.category}>{article.category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{article.date}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <Section bg="white" padding="large">
        <div className={styles.contentContainer}>
          {/* Featured Image */}
          <div className={styles.imageBlock}>
            <img src={article.image} alt={article.title} className={styles.image} />
            <span className={styles.imageCaption}>{t.newsDetail.imageCaption}</span>
          </div>

          {/* Article Body */}
          <div className={styles.body}>
            <p className={styles.lead}>{article.excerpt}</p>

            <p>{t.newsDetail.bodyPara1}</p>

            <h2>{t.newsDetail.bodyHeading1}</h2>
            <p>{t.newsDetail.bodyPara2}</p>

            <blockquote>{t.newsDetail.quote}</blockquote>

            <h2>{t.newsDetail.bodyHeading2}</h2>
            <p>{t.newsDetail.bodyPara3}</p>

            <div className={styles.demoBox}>
              <strong>DEMO ARTICLE</strong>: {t.newsDetail.demoNote}
            </div>
          </div>

          {/* Share and Tags */}
          <div className={styles.articleFooter}>
            <div className={styles.tags}>
              <span className={styles.tag}>Matrix Holding</span>
              <span className={styles.tag}>{article.category}</span>
              <span className={styles.tag}>
                {language === 'vi' ? 'Hệ sinh thái' : 'Ecosystem'}
              </span>
            </div>
            <div className={styles.share}>
              <span className={styles.shareLabel}>{t.common.share}</span>
              <button
                className={styles.shareBtn}
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href)
                  alert(t.common.copiedAlert)
                }}
              >
                <Share2 size={15} />
                <span>{t.common.copyLink}</span>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className={styles.relatedSection}>
            <div className="section-label">{t.newsDetail.relatedTitle}</div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/tin-tuc/${item.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImgBox}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCat}>{item.category}</span>
                    <h4 className={styles.relatedTitle}>{item.title}</h4>
                    <span className={styles.relatedDate}>{item.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </article>
  )
}
