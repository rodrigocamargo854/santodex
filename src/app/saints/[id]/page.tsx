import SaintCarousel from '@/app/components/SaintCarrossel'
import { saints } from '../../data/saints'
import { saintDetails } from '../../data/saintDetails'
import Link from 'next/link'

type Params = {
  params: {
    id: string
  }
}

export default function SaintDetail({ params }: Params) {
  const saint = saints.find((s) => s.id === params.id)

  if (!saint) {
    return <div className="p-8">Santo não encontrado.</div>
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4">
      <div className="max-w-3xl w-full px-6 py-12 bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="flex flex-col items-center">
          <img
            src={saint.image}
            alt={saint.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-[#C2A677] shadow-md"
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#5E4638]">
            {saint.name}
          </h1>
          <p className="text-sm text-[#7A5E4A] italic mt-1">{saint.title}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium uppercase tracking-wide">Festa</span>
            <span className="text-[#5E4638] font-semibold">{saint.feastDay}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium uppercase tracking-wide">Nascimento</span>
            <span className="text-[#5E4638] font-semibold">{saint.birthDate}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium uppercase tracking-wide">Falecimento</span>
            <span className="text-[#5E4638] font-semibold">{saint.deathDate}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium uppercase tracking-wide">Beatificação</span>
            <span className="text-[#5E4638] font-semibold">{saint.beatified}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium uppercase tracking-wide">Canonização</span>
            <span className="text-[#5E4638] font-semibold">{saint.canonized}</span>
          </div>
        </div>


        <div className="mt-8 text-sm text-[#5E4638] leading-relaxed text-justify">
          {saint.description}
        </div>
        {saintDetails[saint.id] && (
          <div className="mt-12">
            <SaintCarousel slides={saintDetails[saint.id]} />
          </div>
        )}


        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-[#5E4638] font-medium hover:text-[#C2A677] transition"          >
            ← Voltar para a Santodex
          </Link>
        </div>
      </div>
    </div>


  )
}
