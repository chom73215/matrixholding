import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './NewsCard.module.css'

export default function NewsCard({ article, variant = 'standard' }) {
  const { t } = useLanguage()
  const { slug, category, date, title, excerpt, image } = article

  if (variant === 'featured') {
    return (
      <Link to={`/tin-tuc/${slug}`} className={styles.featured}>
        <div className={styles.featuredImgWrapper}>
          <img src={image} alt={title} className={styles.featuredImg} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.featuredContent}>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{date}</span>
          </div>
          <h3 className={styles.featuredTitle}>{title}</h3>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.readMore}>
            <span>{t.common.readArticle}</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/tin-tuc/${slug}`} className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.arrowRow}>
          <span className={styles.readText}>{t.common.readMore}</span>
          <ArrowUpRight size={14} className={styles.arrow} />
        </div>
      </div>
    </Link>
  )
}
