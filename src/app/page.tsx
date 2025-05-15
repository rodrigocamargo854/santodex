// app/page.tsx
import Hero from './components/Hero'
import SaintGrid from '../app/components/SaintGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Hero />
      <section id="grid" className="px-6 py-12 max-w-6xl mx-auto">
        <SaintGrid />
      </section>
    </main>
  )
}
