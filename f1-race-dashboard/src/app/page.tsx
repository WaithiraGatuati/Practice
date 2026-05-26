'use client'
import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import StatCard from '@/components/cards/StatCard'
import LapTimeChart from '@/components/charts/LapTimeChart'

export default function Page() {
  return (
    <main className="dashboard-root">
      {/* SIDEBAR */}
     <Sidebar />

      {/* MAIN CONTENT */}
      <div className='dashboard-content'>

        {/* NAVBAR */}
        <Navbar />

        {/* CARDS SECTION */}
        <section className='cards-container'>

          <StatCard title="Total Laps" value="70" subtitle="Canadian Grand Prix" />

          <StatCard title="Fastest Driver" value="Carlos Sainz" subtitle="1:25:123" />

          <StatCard title="Pit Stops" value="2" subtitle="3.2 seconds" />

        </section>

        {/* CHART SECTION */}
        <LapTimeChart />

      </div>
    </main>
  )
}