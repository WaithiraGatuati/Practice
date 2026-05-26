'use client'

function formatLapTime(time: number) {
  const seconds = Math.floor(time)
  const hundredths = Math.round((time - seconds) * 100)
  return `${seconds}.${hundredths.toString().padStart(2, '0')}s`
}

export default function LapTimeChart() {
  const data = [
    { lap: 1, time: 1.32 },
    { lap: 2, time: 1.3 },
    { lap: 3, time: 1.29 },
    { lap: 4, time: 1.31 },
    { lap: 5, time: 1.28 },
  ]

  const chartWidth = 760
  const chartHeight = 320
  const padding = 40
  const times = data.map((point) => point.time)
  const minTime = Math.min(...times) - 0.04
  const maxTime = Math.max(...times) + 0.04
  const range = maxTime - minTime
  const stepX = (chartWidth - padding * 2) / (data.length - 1)

  const points = data.map((point, index) => {
    const x = padding + index * stepX
    const y = chartHeight - padding - ((point.time - minTime) / range) * (chartHeight - padding * 2)
    return { ...point, x, y }
  })

  const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
  const fillPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`

  const gridLines = [0, 1, 2, 3].map((index) => {
    const y = padding + ((chartHeight - padding * 2) / 3) * index
    const value = (maxTime - ((chartHeight - padding * 2 - (y - padding)) / (chartHeight - padding * 2)) * range).toFixed(2)
    return { y, label: `${value}s` }
  })

  return (
    <section className='chart-section'>
      <div className='chart-panel'>
        <div className='chart-header'>
          <div>
            <h1>Lap Time Trend</h1>
            <p>Visual performance across the last 5 laps.</p>
          </div>
          <span>Lower is better</span>
        </div>

        <div className='chart-svg-wrap'>
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className='chart-svg'>
            <defs>
              <linearGradient id='lapGradient' x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor='rgba(255, 24, 1, 0.32)' />
                <stop offset='100%' stopColor='rgba(255, 24, 1, 0.04)' />
              </linearGradient>
            </defs>

            <rect x='0' y='0' width={chartWidth} height={chartHeight} fill='transparent' />

            {gridLines.map((line) => (
              <g key={line.y}>
                <line x1={padding} y1={line.y} x2={chartWidth - padding} y2={line.y} stroke='rgba(255,255,255,0.08)' strokeDasharray='4 6' />
                <text x={padding - 8} y={line.y + 4} textAnchor='end' fill='var(--muted)' fontSize='12'>
                  {line.label}
                </text>
              </g>
            ))}

            <path d={fillPath} fill='url(#lapGradient)' />
            <path d={linePath} fill='none' stroke='var(--accent)' strokeWidth='3' strokeLinecap='round' />

            {points.map((point) => (
              <g key={point.lap}>
                <circle cx={point.x} cy={point.y} r='5' fill='var(--accent)' stroke='white' strokeWidth='2' />
                <text x={point.x} y={point.y - 12} textAnchor='middle' fill='var(--text)' fontSize='12'>
                  {formatLapTime(point.time)}
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
          {data.map((point) => (
            <div key={point.lap} className='chart-stat'>
              <span>Lap {point.lap}</span>
              <strong>{formatLapTime(point.time)}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
