'use client'

import StatCard from '@/components/cards/StatCard'
import LapTimeChart from '@/components/charts/LapTimeChart'
import PositionChangesChart from '@/components/charts/PositionChangesChart'
import SpeedTrapChart from '@/components/charts/SpeedTrapChart'
import TireStrategy from '@/components/charts/TireStrategy'

export default function DashboardPage() {
  return (
    <>
      <header className='dashboard-header'>
        <div>
          <h1 className='page-title'>Race Dashboard</h1>
          <p className='page-subtitle'>Canadian Grand Prix overview for lap pace, position movement, speed traps, and tire strategy.</p>
        </div>
        <div className='dashboard-meta'>
          <span>Session: Sprint</span>
          <span>Track: Dry</span>
          <span>Updated: Lap 23</span>
        </div>
      </header>

      <section className='cards-container'>
        <StatCard title='Total Laps' value='70' subtitle='Canadian Grand Prix' />
        <StatCard title='Fastest Driver' value='Carlos Sainz' subtitle='1:25.123' />
        <StatCard title='Pit Stops' value='2' subtitle='3.2 seconds' />
      </section>

      <section className='chart-grid'>
        <LapTimeChart />
        <PositionChangesChart />
        <SpeedTrapChart />
        <TireStrategy />
      </section>
    </>
  )
}
