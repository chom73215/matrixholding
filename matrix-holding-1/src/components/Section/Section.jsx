import { useInView } from '../../hooks/useInView'
import styles from './Section.module.css'

export default function Section({
  children,
  className = '',
  id,
  bg = 'white', // 'white' | 'gray' | 'dark'
  padding = 'default', // 'default' | 'large' | 'compact' | 'none'
}) {
  const [ref, inView] = useInView(0.1)

  const cls = [
    styles.section,
    styles[bg],
    styles[padding],
    inView ? styles.visible : styles.hidden,
    className,
  ].filter(Boolean).join(' ')

  return (
    <section ref={ref} id={id} className={cls}>
      {children}
    </section>
  )
}
