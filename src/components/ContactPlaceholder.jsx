import React from 'react'
import Layout, { Section } from './Layout'
import { useLanguage } from './LanguageContext'

const colors = { text: '#4d606b' }

export default function ContactPlaceholder() {
  const { t } = useLanguage()
  return (
    <Layout>
      <Section className="py-16">
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>{t.contact_title}</h1>
        <p className="mb-2" style={{ color: colors.text }}>{t.contact_desc}</p>
        <p style={{ color: colors.text }}>support@jaimy.be</p>
      </Section>
    </Layout>
  )
}
