'use client'
import React from 'react'

type Stint = {
  compound: string
  laps: number
  caption: string
}

const stints: Stint[] = [
  { compound: 'Soft', laps: 14, caption: 'Opening sprint' },
  { compound: 'Medium', laps: 19, caption: 'Consistency' },
  { compound: 'Hard', laps: 12, caption: 'Final conservation' },
]

const totalLaps = stints.reduce((sum, stint) => sum + stint.laps, 0)
const colors: Record<string, string> = {
  Soft: '#fb7185',
  Medium: '#34d399',
  Hard: '#818cf8',
}

export default function TireStrategy() {
  return (
    <section className='chart-section'>
      <div className='chart-panel'>
        <div className='chart-header'>
          <div>
            <h1>Tire Strategy</h1>
            <p>Review stint composition and compound choices.</p>
          </div>
          <span>Compound mix visualized</span>
        </div>

        <div className='strategy-bar'>
          {stints.map((stint) => (
            <div
              key={stint.compound}
              className='strategy-segment'
              style={{
                width: `${(stint.laps / totalLaps) * 100}%`,
                background: colors[stint.compound] || 'rgba(255,255,255,0.08)',
              }}
            >
              <span>{stint.laps}L</span>
            </div>
          ))}
        </div>

        <div className='chart-stats'>
          <div className='chart-stat'>
            <span>Total Stint Laps</span>
            <strong>{totalLaps}</strong>
          </div>
          <div className='chart-stat'>
            <span>Compound Count</span>
            <strong>{stints.length}</strong>
          </div>
          <div className='chart-stat'>
            <span>Longest Stint</span>
            <strong>{Math.max(...stints.map((stint) => stint.laps))} laps</strong>
          </div>
        </div>

        <div className='tire-legend'>
          {stints.map((stint) => (
            <div key={stint.compound} className='tire-legend-item'>
              <span className='tire-chip' style={{ background: colors[stint.compound] }} />
              <span>{stint.compound} — {stint.laps} laps</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
