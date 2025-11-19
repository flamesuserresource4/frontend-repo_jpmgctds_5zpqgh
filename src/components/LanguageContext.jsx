import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext()

const DEFAULT_LANG = 'nl'

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(DEFAULT_LANG)

  useEffect(() => {
    const url = new URL(window.location.href)
    const qp = url.searchParams.get('lang')
    const stored = localStorage.getItem('lang')
    const initial = qp || stored || DEFAULT_LANG
    setLang(initial)
  }, [])

  useEffect(() => {
    if (!lang) return
    localStorage.setItem('lang', lang)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url.toString())
  }, [lang])

  const t = useMemo(() => {
    const nl = {
      cta: 'Dien je aanvraag in',
      nav_services: 'Onze diensten',
      nav_blog: 'Blog',
      nav_contact: 'Contact',
      switch_label: 'FR',
      hero_title: 'Jaimy by Belfius: Hier begint jouw gemoedsrust voor je werken.',
      hero_sub: 'De juiste Pro, zonder de stress van het zoeken.',
      search_placeholder: 'Waarmee kunnen we jou helpen? (bv. ketelonderhoud, dakwerken...)',
      search_cta: 'Vind jouw Pro',
      usp_simple: 'Eenvoud',
      usp_quality: 'Kwaliteit',
      usp_trust: 'Veiligheid & Belfius Trust',
      usp_simple_desc: 'Vraag in 3 stappen aan – jij vertelt, wij regelen.',
      usp_quality_desc: 'Geselecteerde vakmensen met bewezen kwaliteit.',
      usp_trust_desc: 'Vertrouwd merk met focus op veiligheid en service.',
      categories_title: 'Populaire categorieën',
      cat_heating: 'Verwarming',
      cat_boiler: 'Ketelonderhoud',
      cat_roof: 'Dakwerken',
      cat_insulation: 'Isolatie',
      banner_phrase: 'Vos travaux, notre expertise.',
      footer_copy: '© 2025 Jaimy by Belfius. Alle rechten voorbehouden.',
      services_overview_title: 'Verwarming: comfortabel en zorgeloos',
      services_overview_desc: 'Werk met gecertificeerde Pro’s zodat jij in alle rust kan genieten.',
      services_subcats: 'Subcategorieën',
      view_category: 'Bekijk categorie',
      cat_page_title: 'Ketelonderhoud zonder zorgen',
      cat_page_intro: 'De juiste Pro, zonder de stress van het zoeken. Vind snel een betrouwbare expert voor jouw ketel.',
      cat_page_empathy: 'Een Pro van vertrouwen vinden was nog nooit zo eenvoudig.',
      steps_title: 'Zo werkt het – in 3 stappen',
      step1: 'Beschrijf jouw project',
      step1_desc: 'Vertel wat je nodig hebt en voeg foto’s toe indien mogelijk.',
      step2: 'Ontvang offertes binnen 48u',
      step2_desc: 'Je krijgt meerdere transparante offertes van erkende Pro’s.',
      step3: 'Kies en plan',
      step3_desc: 'Vergelijk, kies jouw Pro en plan de uitvoering wanneer het jou past.',
      iframe_intro: 'Beschrijf hier je project en ontvang je eerste offertes binnen 48 uur.',
      blog_title: 'Blog – Tips en inspiratie',
      contact_title: 'Contact',
      contact_desc: 'Heb je vragen? Wij helpen je graag verder.',
    }

    const fr = {
      cta: 'Soumettez votre demande',
      nav_services: 'Nos services',
      nav_blog: 'Blog',
      nav_contact: 'Contact',
      switch_label: 'NL',
      hero_title: 'Jaimy by Belfius : Ici commence votre sérénité pour vos travaux.',
      hero_sub: 'Le bon Pro, sans le stress de la recherche.',
      search_placeholder: 'Comment pouvons-nous vous aider ? (p.ex. entretien chaudière, toiture...)',
      search_cta: 'Trouvez votre Pro',
      usp_simple: 'Simplicité',
      usp_quality: 'Qualité',
      usp_trust: 'Sécurité & Confiance Belfius',
      usp_simple_desc: 'Demande en 3 étapes – vous expliquez, nous organisons.',
      usp_quality_desc: 'Des professionnels sélectionnés avec une qualité prouvée.',
      usp_trust_desc: 'Marque de confiance, axée sur la sécurité et le service.',
      categories_title: 'Catégories populaires',
      cat_heating: 'Chauffage',
      cat_boiler: 'Entretien de chaudière',
      cat_roof: 'Toiture',
      cat_insulation: 'Isolation',
      banner_phrase: 'Vos travaux, notre expertise.',
      footer_copy: '© 2025 Jaimy by Belfius. Tous droits réservés.',
      services_overview_title: 'Chauffage : confort en toute tranquillité',
      services_overview_desc: 'Travaillez avec des Pros certifiés et profitez sereinement.',
      services_subcats: 'Sous-catégories',
      view_category: 'Voir la catégorie',
      cat_page_title: 'Entretien de chaudière sans souci',
      cat_page_intro: 'Le bon Pro, sans le stress de la recherche. Trouvez rapidement un expert fiable pour votre chaudière.',
      cat_page_empathy: "Trouver un Pro de confiance n'a jamais été aussi facile.",
      steps_title: 'Comment ça marche – en 3 étapes',
      step1: 'Décrivez votre projet',
      step1_desc: 'Dites-nous ce dont vous avez besoin et ajoutez des photos si possible.',
      step2: 'Recevez des devis sous 48h',
      step2_desc: 'Vous recevez plusieurs devis transparents de Pros agréés.',
      step3: 'Choisissez et planifiez',
      step3_desc: 'Comparez, choisissez votre Pro et planifiez selon votre disponibilité.',
      iframe_intro: 'Décrivez votre projet ici et recevez vos premiers devis sous 48 heures.',
      blog_title: 'Blog – Conseils et inspiration',
      contact_title: 'Contact',
      contact_desc: 'Une question ? Nous sommes là pour vous aider.',
    }

    return lang === 'fr' ? fr : nl
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
