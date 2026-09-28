import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './EcosystemCard.module.css'

export default function EcosystemCard({ id, name, description, to = '/he-sinh-thai' }) {
  const { t } = useLanguage()

  return (
    <Link to={to} className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>{id}</span>
        <div className={styles.arrowBox}>
          <ArrowUpRight size={18} className={styles.arrow} />
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.exploreText}>{t.common.exploreMore}</span>
      </div>
    </Link>
  )
}
