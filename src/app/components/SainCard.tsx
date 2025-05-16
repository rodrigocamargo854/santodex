// app/components/SaintCard.tsx

import Link from "next/link"
import Image from 'next/image'
type Saint = {
  id: string
  name: string
  type: string
  title: string
  birthDate: string
  deathDate: string
  feastDay: string
  canonized: string
  beatified: string
  image: string
  description: string
}

export default function SaintCard({ saint }: { saint: Saint }) {
  return (
    <div className="rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-100">
      <div className="relative w-full flex flex-col items-center">
        <Image
          src={saint.image}
          alt={saint.name}
          width={112}
          height={112}
          className="w-28 h-28 object-cover rounded-full border-4 border-[#C2A677] shadow"
        />
        <span className="absolute top-2 right-2 bg-[#C2A677] text-white text-xs px-3 py-0.5 rounded-full uppercase tracking-wide font-semibold">
          {saint.type}
        </span>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold text-[#5E4638]">{saint.name}</h2>
        <p className="text-sm text-[#7A5E4A] italic">{saint.title}</p>
      </div>

      <div className="mt-4 text-xs text-gray-600 space-y-1 text-center">
        <p><strong>Festa:</strong> {saint.feastDay}</p>
        <p><strong>Nascimento:</strong> {saint.birthDate}</p>
        <p><strong>Falecimento:</strong> {saint.deathDate}</p>
      </div>

      <div className="mt-4 text-center">
        <Link
          href={`/saints/${saint.id}`}
          className="inline-block text-sm px-4 py-1.5 bg-[#5E4638] text-white rounded-full hover:bg-[#4d3a2d] transition"
        >
          Ver mais
        </Link>

      </div>
    </div>
  )
}
