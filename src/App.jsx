import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ServiceOverview from './components/ServiceOverview'
import CategoryPage from './components/CategoryPage'
import BlogPlaceholder from './components/BlogPlaceholder'
import ContactPlaceholder from './components/ContactPlaceholder'
import { LanguageProvider } from './components/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/heating" element={<ServiceOverview />} />
        <Route path="/services/heating/boiler" element={<CategoryPage />} />
        <Route path="/blog" element={<BlogPlaceholder />} />
        <Route path="/contact" element={<ContactPlaceholder />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
