'use client'
import Hero from './components/Hero'
import SaintGrid from '../app/components/SaintGrid'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Hero onSearch={(term) => setSearchTerm(term)} />      <section id="grid" className="px-6 py-12 max-w-6xl mx-auto">
      <SaintGrid search={searchTerm} />      </section>
    </main>
  )
}
