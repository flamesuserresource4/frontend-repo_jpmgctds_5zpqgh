import React from 'react'
import Layout, { Section } from './Layout'
import { useLanguage } from './LanguageContext'

const colors = { text: '#4d606b' }

export default function BlogPlaceholder() {
  const { t } = useLanguage()
  return (
    <Layout>
      <Section className="py-16">
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>{t.blog_title}</h1>
        <p style={{ color: colors.text }}>
          Coming soon: expert advice, checklists en real-life cases om jou te helpen de juiste keuzes te maken. / A venir : conseils d'experts, check-lists et cas concrets pour vous aider à faire les bons choix.
        </p>
      </Section>
    </Layout>
  )
}
