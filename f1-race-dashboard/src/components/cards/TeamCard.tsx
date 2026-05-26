import React from 'react'

type TeamDriver = string | { name: string; imageUrl?: string }

type TeamCardProps = {
  name: string
  drivers: TeamDriver[]
  constructorsChampionships: number
  teamPrincipal: string
  teamstanding: number
  logoUrl?: string
}

function normalizeDriver(driver: TeamDriver) {
  return typeof driver === 'string' ? { name: driver } : driver
}

export default function TeamCard({ name, drivers, constructorsChampionships, teamPrincipal, teamstanding, logoUrl }: TeamCardProps) {
  const normalizedDrivers = drivers.map(normalizeDriver)

  return (
    <div className='card team-card'>
      <div className='team-card-header'>
        {logoUrl ? (
          <div className='team-logo-wrap'>
            <img src={logoUrl} alt={`${name} logo`} />
          </div>
        ) : null}

        <div>
          <h1>{name}</h1>
          <p className='team-subtitle'>Team Principal: {teamPrincipal}</p>
          <p className='team-subtitle'>Standing: {teamstanding}</p>
        </div>
      </div>

      <div className='team-drivers'>
        {normalizedDrivers.map((driver) => (
          <div key={driver.name} className='team-driver'>
            {driver.imageUrl ? <img className='team-driver-image' src={driver.imageUrl} alt={driver.name} /> : null}
            <span>{driver.name}</span>
          </div>
        ))}
      </div>

      <div className='team-card-meta'>
        <p>Championships: {constructorsChampionships}</p>
      </div>
    </div>
  )
}