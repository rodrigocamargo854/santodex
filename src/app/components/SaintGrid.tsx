// app/components/SaintGrid.tsx
'use client'

import { saints } from '../data/saints'
import SaintCard from './SainCard'

export default function SaintGrid({ search }: { search: string }) {
    const filtered = saints.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <section id="grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-12">
          {filtered.map((saint) => (
            <SaintCard key={saint.id} saint={saint} />
          ))}
        </section>
      )
}
