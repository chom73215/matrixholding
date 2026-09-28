import styles from './PageHero.module.css'

export default function PageHero({ label, title, subtitle }) {
  return (
    <div className={styles.hero}>
      <div className={styles.bgGrid} />
      <div className={styles.container}>
        {label && <div className={styles.label}>{label}</div>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.sub}>{subtitle}</p>}
      </div>
    </div>
  )
}
