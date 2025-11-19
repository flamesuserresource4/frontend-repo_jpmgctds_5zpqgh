import React from 'react'
import Layout, { Section } from './Layout'
import { useLanguage } from './LanguageContext'

const colors = {
  primary: '#af1b3c',
  text: '#4d606b',
  subtle: '#aaacb6',
}

export default function CategoryPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="bg-white">
        <div className="py-16" style={{ background: 'linear-gradient(135deg, #961e34, #C30B30)' }}>
          <Section>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{t.cat_page_title}</h1>
            <p className="text-white/90 max-w-3xl">{t.cat_page_intro}</p>
          </Section>
        </div>

        <Section className="py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-1" style={{ color: colors.text }}>1. {t.step1}</h3>
              <p style={{ color: colors.text }}>{t.step1_desc}</p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-1" style={{ color: colors.text }}>2. {t.step2}</h3>
              <p style={{ color: colors.text }}>{t.step2_desc}</p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-1" style={{ color: colors.text }}>3. {t.step3}</h3>
              <p style={{ color: colors.text }}>{t.step3_desc}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-lg font-medium" style={{ color: colors.text }}>{t.cat_page_empathy}</p>
          </div>

          <div className="border rounded-xl p-6 bg-gray-50" style={{ borderColor: colors.subtle }}>
            <p className="mb-4" style={{ color: colors.text }}>{t.iframe_intro}</p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border bg-white" style={{ borderColor: colors.subtle }}>
              <iframe title="Lead form" src="https://example.com/lead-form" className="w-full h-full" />
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}
