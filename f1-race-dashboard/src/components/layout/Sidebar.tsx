'use client'

import Link from 'next/link'

export default function Sidebar() {
    return (
         <div className='bar'>
        <h1>F1 Dashboard</h1>

        <h2>Dashboard</h2>
        
        <Link href="/dashboard/drivers"><h3>Drivers</h3></Link>
        <Link href="/dashboard/races"><h3>Races</h3></Link>
        <Link href="/dashboard/teams"><h3>Teams</h3></Link>
      </div>
    )
}