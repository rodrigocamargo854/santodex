// app/components/SaintGrid.tsx
'use client'

import { saints } from '../data/saints'
import SaintCard from './SainCard'

export default function SaintGrid() {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {saints.map((saint) => (
                <SaintCard key={saint.id} saint={saint} />
            ))}

        </div>
    )
}
