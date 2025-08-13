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
    <section className="bg-[#fdfaf7] py-20 text-center border-b border-[#e8e1d9] relative overflow-hidden"> 
      <div className="max-w-4xl mx-auto px-6 mt-0"> 
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#7A5E4A] via-[#B89B7D] to-[#7A5E4A] bg-clip-text text-transparent animate-gradient">
          Santodex
        </h1>
        
        <p className="mt-4 text-lg text-[#7A5E4A] italic">
          Descubra os santos e beatos...
        </p>

        <p className="mt-1 text-sm text-[#B89B7D]">
          Desenvolvido por Rodrigo Camargo
        </p>

        <div className="relative mt-8 w-full max-w-md mx-auto"> 
          <input
            type="text"
            value={value}
            onChange={handleChange} 
            placeholder="Pesquisar santo por nome ou data..."
            className="w-full px-4 py-2 rounded-full border border-[#B89B7D] text-sm text-[#7A5E4A] placeholder-[#B89B7D] focus:outline-none focus:ring-2 focus:ring-[#B89B7D] focus:border-transparent transition duration-300 ease-in-out"
          />
          <svg 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7A5E4A]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
