import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <CheckCircle2 size={44} className={styles.successIcon} />
        <h3 className={styles.successTitle}>{t.contact.successTitle}</h3>
        <p className={styles.successDesc}>{t.contact.successDesc}</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
          }}
          className={styles.resetBtn}
        >
          {t.contact.resetBtn}
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {t.contact.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t.contact.emailFieldLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            {t.contact.phoneFieldLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t.contact.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="subject">
            {t.contact.subjectLabel}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder={t.contact.subjectPlaceholder}
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {t.contact.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t.contact.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <div className={styles.demoNote}>{t.contact.demoFormNote}</div>

      <button type="submit" disabled={loading} className={styles.submitBtn}>
        {loading ? (
          <span>{t.contact.submittingBtn}</span>
        ) : (
          <>
            <span>{t.contact.submitBtn}</span>
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  )
}
