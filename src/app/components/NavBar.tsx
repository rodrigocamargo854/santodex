'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Globe, Smartphone, HeartHandshake } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/saints', label: 'Santodex', icon: BookOpen },
    { href: 'https://comshalom.org/', label: 'Shalom', icon: HeartHandshake, external: true },
    { href: 'https://cancaonova.com', label: 'Apps', icon: Smartphone, external: true },
    { href: 'https://www.vaticannews.va/pt.html', label: 'Vaticano', icon: Globe, external: true }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-xs text-[#5E4638] font-medium">
          {links.map(({ href, label, icon: Icon, external }) => {
            const isActive = pathname === href
            const baseClass = 'flex flex-col items-center hover:text-[#C2A677] transition'
            const activeClass = isActive ? 'text-[#C2A677]' : ''

            return (
              <li key={label}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass} ${activeClass}`}
                  >
                    <Icon size={20} />
                    <span className="mt-1">{label}</span>
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={`${baseClass} ${activeClass}`}
                  >
                    <Icon size={20} />
                    <span className="mt-1">{label}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
