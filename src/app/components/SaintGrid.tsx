// app/components/SaintGrid.tsx
'use client'

import { saints } from '../data/saints'
import SaintCard from './SainCard'

export default function SaintGrid({ search }: { search: string }) {

  function parseFeastDay(feastDay: string): Date {
    const [day, de, month] = feastDay.split(' ')
    const months = [
      '', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]
    const monthIndex = months.indexOf(month.toLowerCase())
    return new Date(2000, monthIndex - 1, parseInt(day))
  }

  const filtered = saints.filter((s) => {
    const term = search.toLowerCase()
    return (
      s.name.toLowerCase().includes(term) ||
      s.feastDay.toLowerCase().includes(term) ||
      s.birthDate.includes(term)
    )
  })
  
  return (
    <section id="grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-12">
      {filtered
        .sort(
          (a, b) =>
            parseFeastDay(a.feastDay).getTime() - parseFeastDay(b.feastDay).getTime()
        )
        .map((saint) => (
          <SaintCard key={saint.id} saint={saint} />
        ))}

    </section>
  )
}
