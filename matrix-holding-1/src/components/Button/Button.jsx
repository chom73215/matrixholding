import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import styles from './Button.module.css'

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'gold'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = true,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight className={styles.icon} size={size === 'sm' ? 12 : size === 'lg' ? 16 : 14} />}
    </>
  )

  if (to) {
    return <Link to={to} className={cls}>{content}</Link>
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  )
}
