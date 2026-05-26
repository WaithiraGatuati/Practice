import React from 'react'
import Link from 'next/link'

export default function DriverCard({ id, name, team, position }: { id: string; name: string; team: string; position: number }) {
    return (
        <Link href={`/dashboard/drivers/${id}`}>
            <div className='cards'>
                <h2>{name}</h2>
                <p>{team}</p>
                <p>Position: {position}</p>
            </div>
        </Link>
    )
}