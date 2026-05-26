'use client'
import React from 'react'

type SpeedPoint = {
  zone: string
  speed: number
}

const data: SpeedPoint[] = [
  { zone: 'Sector 1', speed: 312 },
  { zone: 'Sector 2', speed: 318 },
  { zone: 'Sector 3', speed: 305 },
  { zone: 'Sector 4', speed: 320 },
]

const maxSpeed = Math.max(...data.map((point) => point.speed))
const minSpeed = Math.min(...data.map((point) => point.speed))
const chartWidth = 760
const chartHeight = 320
const padding = 48
const barHeight = 26
const gap = 22
const barWidth = chartWidth - padding * 2

export default function SpeedTrapChart() {
  return (
    <section className='chart-section'>
      <div className='chart-panel'>
        <div className='chart-header'>
          <div>
            <h1>Speed Trap</h1>
            <p>Compare peak speeds across the fastest zones.</p>
          </div>
          <span>Higher speed is better</span>
        </div>

        <div className='chart-svg-wrap'>
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className='chart-svg'>
            <rect x='0' y='0' width={chartWidth} height={chartHeight} fill='transparent' />

            {data.map((point, index) => {
              const y = padding + index * (barHeight + gap)
              const width = ((point.speed - minSpeed) / (maxSpeed - minSpeed || 1)) * barWidth
              return (
                <g key={point.zone}>
                  <text x={padding - 10} y={y + barHeight / 2 + 4} textAnchor='end' fill='var(--muted)' fontSize='12'>
                    {point.zone}
                  </text>
                  <rect x={padding} y={y} width={barWidth} height={barHeight} rx='999' fill='rgba(255,255,255,0.05)' />
                  <rect x={padding} y={y} width={width} height={barHeight} rx='999' fill='rgba(255, 24, 1, 0.85)' />
                  <text x={padding + width + 12} y={y + barHeight / 2 + 4} fill='var(--text)' fontSize='12'>
                    {point.speed} km/h
                  </text>
                </g>
              )
            })}

            <line x1={padding} y1={chartHeight - padding + 6} x2={chartWidth - padding} y2={chartHeight - padding + 6} stroke='rgba(255,255,255,0.12)' />
            <text x={padding} y={chartHeight - padding + 24} fill='var(--muted)' fontSize='11'>Min</text>
            <text x={chartWidth - padding} y={chartHeight - padding + 24} textAnchor='end' fill='var(--muted)' fontSize='11'>Max</text>
          </svg>
        </div>

        <div className='chart-stats'>
          <div className='chart-stat'>
            <span>Top Speed</span>
            <strong>{maxSpeed} km/h</strong>
          </div>
          <div className='chart-stat'>
            <span>Average Speed</span>
            <strong>{Math.round(data.reduce((sum, point) => sum + point.speed, 0) / data.length)} km/h</strong>
          </div>
          <div className='chart-stat'>
            <span>Speed Range</span>
            <strong>{maxSpeed - minSpeed} km/h</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
