import RaceSummaryCard from '@/components/cards/RaceSummaryCard'

export default function SummaryPage() {
    return (
        <main className='summary-page'>
            <h4>2026 Race Schedule</h4>
            <div className='cards-container'>
                <RaceSummaryCard 
                    raceName="Bahrain Grand Prix"
                    date="March 2"
                    location="Bahrain International Circuit"
                    time="15:00"
                />

                <RaceSummaryCard 
                    raceName="Silverstone Grand Prix"
                    date="August 4"
                    location="Silverstone Circuit"
                    time="16:00"
                />
            </div>
        </main>
    )
}