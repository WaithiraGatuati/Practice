import React from 'react'
import Link from 'next/link'

type DriverCardProps = {
  id: string
  name: string
  team: string
  position: number
  imageUrl?: string
}

export default function DriverCard({ id, name, team, position, imageUrl }: DriverCardProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

 return (
  <Link href={`/dashboard/drivers/${id}`}>
    <div className="cards driver-card">
      <div className="driver-avatar">
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <div className="driver-avatar-placeholder">{initials}</div>
        )}
      </div>

        <div className='driver-content'>
          <h2>{name}</h2>
          <p>{team}</p>
          <p>Position: {position}</p>
        </div>
      </div>
    </Link>
  )
}