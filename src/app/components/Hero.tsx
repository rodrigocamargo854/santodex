// app/components/Hero.tsx

'use client'

import Link from 'next/link'
import Navbar from './NavBar'
import { useState } from 'react'

export default function Hero({ onSearch }: { onSearch: (term: string) => void }) {
  const [value, setValue] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <section className="bg-[#fdfaf7] pb-4 pt-0 text-center border-b border-[#e8e1d9] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#7A5E4A] via-[#B89B7D] to-[#7A5E4A] bg-clip-text text-transparent animate-gradient">Santodex</h1>
        <p className="mt-4 text-lg text-[#7A5E4A] italic">Descubra os santos e beatos...</p>

        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            onSearch(e.target.value)
          }}
          placeholder="Pesquisar santo por nome ou data..."
          className="mt-6 w-full max-w-md px-4 py-2 rounded-full border border-gray-300 text-sm"
        />
      </div>
    </section>
  )
}
