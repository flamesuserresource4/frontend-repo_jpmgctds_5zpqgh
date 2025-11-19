import React from 'react'
import Layout, { Section } from './Layout'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageContext'

const colors = {
  primary: '#af1b3c',
  text: '#4d606b',
}

export default function ServiceOverview() {
  const { t } = useLanguage()

  const subCats = [
    { key: 'cat_boiler', to: '/services/heating/boiler' },
  ]

  return (
    <Layout>
      <div className="bg-white">
        <div className="py-16" style={{ background: 'linear-gradient(135deg, #961e34, #C30B30)' }}>
          <Section>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.services_overview_title}</h1>
            <p className="text-white/90">{t.services_overview_desc}</p>
          </Section>
        </div>

        <Section className="py-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>{t.services_subcats}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCats.map((s) => (
              <div key={s.key} className="border rounded-xl p-6 bg-white shadow-sm">
                <div className="h-28 bg-gray-100 rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>{t[s.key]}</h3>
                <Link to={s.to} className="inline-block text-white px-4 py-2 rounded font-semibold" style={{ backgroundColor: colors.primary }}>
                  {t.view_category}
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  )
}
