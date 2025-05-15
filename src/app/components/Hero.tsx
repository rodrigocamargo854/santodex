// app/components/Hero.tsx

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './NavBar'

export default function Hero() {
  return (
    <section className="bg-[#fdfaf7] pb-12 pt-0 text-center border-b border-[#e8e1d9] relative overflow-hidden">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5E4638] via-[#C2A677] to-[#5E4638] hover:animate-text-shine">
          Santodex
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#7A5E4A] max-w-2xl mx-auto italic">
          Descubra os santos e beatos que mudaram a história com fé e simplicidade.
        </p>

        <a
          href="#grid"
          className="mt-10 inline-block px-6 py-3 border-2 border-[#C2A677] text-[#5E4638] font-medium rounded-full hover:bg-[#C2A677] hover:text-white transition-all"
        >
          Explorar agora
        </a>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-[#5E4638] font-medium hover:text-[#C2A677] transition"
          >
            ← Voltar para a Santodex
          </Link>
        </div>
      </div>
    </section>
  )
}
