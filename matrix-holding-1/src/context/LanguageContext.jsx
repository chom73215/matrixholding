import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('matrix_language')
      return saved === 'en' ? 'en' : 'vi'
    } catch {
      return 'vi'
    }
  })

  const setLanguage = (lang) => {
    const validLang = lang === 'en' ? 'en' : 'vi'
    setLanguageState(validLang)
    try {
      localStorage.setItem('matrix_language', validLang)
    } catch {
      // localStorage may fail in some environments
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi')
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = translations[language] || translations.vi

  return (
    <LanguageContext.Provider
      value={{
        language,
        isVi: language === 'vi',
        isEn: language === 'en',
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
