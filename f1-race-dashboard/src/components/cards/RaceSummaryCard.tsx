

export default function RaceSummaryCard({ raceName,date, location, time}: { raceName: string;  date: string; location: string; time: string }) {
    return (
        <div className="card">
            <h1>{raceName}</h1>
            
            <p>{date}</p>
            <p>{location}</p>
            <p>{time}</p>
        </div>
        
    )
}