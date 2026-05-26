'use client'

export default function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <p>{value}</p>
            <span>{subtitle}</span>
        </div>
    )
}