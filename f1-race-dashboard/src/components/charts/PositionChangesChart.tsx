'use client'
import React from 'react'

type Point = {
  lap: number
  position: number
  delta: number
}

const data: Point[] = [
  { lap: 1, position: 6, delta: 0 },
  { lap: 2, position: 5, delta: 1 },
  { lap: 3, position: 5, delta: 0 },
  { lap: 4, position: 3, delta: 2 },
  { lap: 5, position: 2, delta: 1 },
]

const minPosition = Math.min(...data.map((point) => point.position))
const maxPosition = Math.max(...data.map((point) => point.position))
const range = maxPosition - minPosition || 1
const chartWidth = 760
const chartHeight = 320
const padding = 44
const innerHeight = chartHeight - padding * 2

const points = data.map((point, index) => {
  const x = padding + (index / (data.length - 1)) * (chartWidth - padding * 2)
  const y = padding + ((point.position - minPosition) / range) * innerHeight
  return { ...point, x, y }
})

const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
const fillPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`

function formatPosition(position: number) {
  return `P${position}`
}

function formatDelta(delta: number) {
  return delta >= 0 ? `+${delta}` : `${delta}`
}

export default function PositionChangesChart() {
  return (
    <section className='chart-section'>
      <div className='chart-panel'>
        <div className='chart-header'>
          <div>
            <h1>Position Changes</h1>
            <p>Track race movement lap by lap.</p>
          </div>
          <span>Lower positions are better</span>
        </div>

        <div className='chart-svg-wrap'>
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className='chart-svg'>
            <rect x='0' y='0' width={chartWidth} height={chartHeight} fill='transparent' />

            {[0, 1, 2, 3].map((index) => {
              const gridPosition = minPosition + (range / 3) * index
              const y = padding + ((gridPosition - minPosition) / range) * innerHeight
              return (
                <g key={index}>
                  <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke='rgba(255,255,255,0.08)' strokeDasharray='4 6' />
                  <text x={padding - 10} y={y + 4} textAnchor='end' fill='var(--muted)' fontSize='12'>
                    {formatPosition(Math.round(gridPosition))}
                  </text>
                </g>
              )
            })}

            <path d={fillPath} fill='rgba(255, 24, 1, 0.12)' />
            <path d={linePath} fill='none' stroke='var(--accent)' strokeWidth='3' strokeLinecap='round' />

            {points.map((point) => (
              <g key={point.lap}>
                <circle cx={point.x} cy={point.y} r='5' fill='var(--accent)' stroke='white' strokeWidth='2' />
                <text x={point.x} y={point.y - 14} textAnchor='middle' fill='var(--text)' fontSize='12'>
                  {formatPosition(point.position)}
                </text>
                <text x={point.x} y={point.y + 22} textAnchor='middle' fill='var(--muted)' fontSize='11'>
                  {formatDelta(point.delta)}
                </text>
              </g>
            ))}

            {points.map((point) => (
              <text key={`tick-${point.lap}`} x={point.x} y={chartHeight - padding + 22} textAnchor='middle' fill='var(--muted)' fontSize='12'>
                L{point.lap}
              </text>
            ))}
          </svg>
        </div>

        <div className='chart-stats'>
          <div className='chart-stat'>
            <span>Best Position</span>
            <strong>{formatPosition(minPosition)}</strong>
          </div>
          <div className='chart-stat'>
            <span>Net Gain</span>
            <strong>{data.reduce((sum, point) => sum + point.delta, 0)}</strong>
          </div>
          <div className='chart-stat'>
            <span>Average Position</span>
            <strong>{(data.reduce((sum, point) => sum + point.position, 0) / data.length).toFixed(1)}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

