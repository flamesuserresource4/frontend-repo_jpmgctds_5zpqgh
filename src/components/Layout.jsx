import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const colors = {
  primary: '#af1b3c',
  gradientFrom: '#961e34',
  gradientTo: '#C30B30',
  bg: '#F4F4F4',
  text: '#4d606b',
  subtle: '#aaacb6',
}

export const Header = () => {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: colors.subtle }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.gradientFrom}, ${colors.gradientTo})` }} />
          <span className="font-semibold" style={{ color: colors.text }}>Jaimy by Belfius</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="text-sm font-medium" style={{ color: colors.text }}>{t.nav_services}</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg p-3 border" style={{ borderColor: colors.subtle }}>
              <div className="grid grid-cols-1 gap-2 min-w-[220px]">
                <NavLink to="/services/heating" className="px-3 py-2 rounded hover:bg-gray-50" style={{ color: colors.text }}>{t.cat_heating}</NavLink>
                <NavLink to="/services/heating/boiler" className="px-3 py-2 rounded hover:bg-gray-50" style={{ color: colors.text }}>{t.cat_boiler}</NavLink>
                <NavLink to="/services/roof" className="px-3 py-2 rounded hover:bg-gray-50" style={{ color: colors.text }}>{t.cat_roof}</NavLink>
                <NavLink to="/services/insulation" className="px-3 py-2 rounded hover:bg-gray-50" style={{ color: colors.text }}>{t.cat_insulation}</NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/blog" className="text-sm font-medium" style={{ color: colors.text }}>{t.nav_blog}</NavLink>
          <NavLink to="/contact" className="text-sm font-medium" style={{ color: colors.text }}>{t.nav_contact}</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'nl' ? 'fr' : 'nl')} className="text-sm font-medium px-3 py-1 rounded border" style={{ borderColor: colors.subtle, color: colors.text }}>
            {t.switch_label}
          </button>
          <Link to="/lead" className="text-sm font-semibold px-4 py-2 rounded text-white" style={{ backgroundColor: colors.primary }}>
            {t.cta}
          </Link>
          <button className="md:hidden p-2 rounded border" style={{ borderColor: colors.subtle }}>
            <Menu size={18} color={colors.text} />
          </button>
        </div>
      </div>
    </header>
  )
}

export const Footer = () => (
  <footer className="mt-16" style={{ backgroundColor: '#fff', borderTop: `1px solid ${colors.subtle}` }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.gradientFrom}, ${colors.gradientTo})` }} />
          <span className="font-semibold" style={{ color: colors.text }}>Jaimy by Belfius</span>
        </div>
        <p className="text-sm" style={{ color: colors.text }}>Vos travaux, notre expertise. / Jouw werken, onze expertise.</p>
      </div>
      <div className="text-sm" style={{ color: colors.text }}>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="text-sm text-right" style={{ color: colors.text }}>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </div>
    <div className="text-center py-4 text-xs" style={{ color: colors.subtle }}>© 2025 Jaimy by Belfius</div>
  </footer>
)

export const Section = ({ children, className = '' }) => (
  <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: colors.bg }}>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
