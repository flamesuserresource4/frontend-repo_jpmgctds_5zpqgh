import React from 'react'
import { Link } from 'react-router-dom'
import Layout, { Section } from './Layout'
import { useLanguage } from './LanguageContext'

const colors = {
  primary: '#af1b3c',
  gradientFrom: '#961e34',
  gradientTo: '#C30B30',
  text: '#4d606b',
}

const categories = [
  { to: '/services/heating', key: 'cat_heating' },
  { to: '/services/heating/boiler', key: 'cat_boiler' },
  { to: '/services/roof', key: 'cat_roof' },
  { to: '/services/insulation', key: 'cat_insulation' },
]

export default function Homepage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="relative py-20 sm:py-28" style={{ background: `linear-gradient(135deg, ${colors.gradientFrom}, ${colors.gradientTo})` }}>
          <Section>
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">{t.hero_title}</h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8">{t.hero_sub}</p>
              <div className="bg-white rounded-lg p-2 flex gap-2 items-center shadow-lg">
                <input type="text" className="flex-1 px-3 py-3 rounded outline-none" placeholder={t.search_placeholder} />
                <Link to="/services/heating" className="px-5 py-3 rounded text-white font-semibold" style={{ backgroundColor: colors.primary }}>{t.search_cta}</Link>
              </div>
              <p className="mt-4 text-white/90">{t.banner_phrase}</p>
            </div>
          </Section>
        </div>

        <Section className="py-12">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow border">
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>{t.usp_simple}</h3>
              <p style={{ color: colors.text }}>{t.usp_simple_desc}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border">
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>{t.usp_quality}</h3>
              <p style={{ color: colors.text }}>{t.usp_quality_desc}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border">
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>{t.usp_trust}</h3>
              <p style={{ color: colors.text }}>{t.usp_trust_desc}</p>
            </div>
          </div>
        </Section>

        <Section className="py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: colors.text }}>{t.categories_title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link key={c.key} to={c.to} className="group bg-white rounded-xl border p-6 shadow hover:shadow-md transition">
                <div className="h-24 rounded mb-4 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold" style={{ color: colors.text }}>{t[c.key]}</span>
                  <span className="text-sm text-white px-3 py-1 rounded" style={{ backgroundColor: colors.primary }}>Go</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  )
}
