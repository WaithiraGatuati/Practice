'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
         <div className='nav'>
          <nav>
            <ul>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/dashboard/drivers">Drivers</Link></li>
              <li><Link href="/dashboard/races">Races</Link></li>
              <li><Link href="/dashboard/teams">Teams</Link></li>
            </ul>
          </nav>
        </div>
    )
}