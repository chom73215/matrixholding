import { useState } from 'react'
import PageHero from '../components/PageHero/PageHero'
import Section from '../components/Section/Section'
import NewsCard from '../components/NewsCard/NewsCard'
import { getNewsArticles } from '../data/mockData'
import { useLanguage } from '../context/LanguageContext'
import styles from './News.module.css'

export default function News() {
  const { t, language, isVi } = useLanguage()
  const currentArticles = getNewsArticles(language)

  const categories = isVi
    ? ['TẤT CẢ', 'DOANH NGHIỆP', 'HỆ SINH THÁI', 'THỊ TRƯỜNG']
    : ['ALL', 'CORPORATE', 'ECOSYSTEM', 'MARKET']

  const allCategoryKey = categories[0]
  const [activeCategory, setActiveCategory] = useState(allCategoryKey)

  // Map category filtering safely
  const filtered =
    activeCategory === allCategoryKey || activeCategory === 'TẤT CẢ' || activeCategory === 'ALL'
      ? currentArticles
      : currentArticles.filter((a) => {
          return a.category.toLowerCase() === activeCategory.toLowerCase()
        })

  const featured = filtered.find((a) => a.featured) || filtered[0]
  const rest = filtered.filter((a) => a.id !== featured?.id)

  return (
    <div className={styles.newsPage}>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <PageHero
        label={t.news.pageHeroLabel}
        title={t.news.pageHeroTitle}
        subtitle={t.news.pageHeroSub}
      />

      <Section bg="white" padding="large">
        <div className="container">
          {/* ── Category Filter ─────────────────────────────────── */}
          <div className={styles.filterBar}>
            <div className={styles.filterList}>
              {categories.map((cat, idx) => {
                const isActive =
                  activeCategory === cat ||
                  (idx === 0 && (activeCategory === 'TẤT CẢ' || activeCategory === 'ALL'))

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      styles.filterBtn,
                      isActive ? styles.filterBtnActive : '',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
            <div className={styles.resultCount}>
              {filtered.length} {t.news.articlesCount}
            </div>
          </div>

          {/* ── News Editorial Grid: Featured Left, List Right ──── */}
          {filtered.length > 0 ? (
            <div className={styles.editorialNewsGrid}>
              {featured && (
                <div className={styles.featuredCol}>
                  <NewsCard article={featured} variant="featured" />
                </div>
              )}

              <div className={styles.sideCol}>
                {rest.map((article) => (
                  <NewsCard key={article.id} article={article} variant="standard" />
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>{t.news.emptyMessage}</p>
            </div>
          )}

          {/* ── All Articles Grid ───────────────────────────────── */}
          {filtered.length > 3 && (
            <div className={styles.moreArticles}>
              <div className="section-label">{t.news.otherArticlesLabel}</div>
              <div className={styles.articlesGrid}>
                {rest.slice(2).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}
