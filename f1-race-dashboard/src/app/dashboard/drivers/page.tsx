'use client'

import DriverCard from '@/components/cards/DriverCard'
import drivers from '@/data/drivers.json'

export default function DriversPage() {
    return (
        <main className='drivers-page'>
            <h4>2026 Drivers Lineup</h4>

            <div className="cards-container">
                {drivers.map((driver) => (
                    <DriverCard
                        key={driver.id}
                        id={driver.id}
                        name={driver.name}
                        team={driver.team}
                        position={driver.position}
                    />
                ))}
            </div>
        </main>
    )
}