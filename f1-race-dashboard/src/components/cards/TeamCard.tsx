export default function TeamCard({ name, drivers, constructorsChampionships, teamPrincipal, teamstanding }: { name: string; drivers: string[]; constructorsChampionships: number; teamPrincipal: string; teamstanding: number }) {
    return (
        <div className='card'>
            <h1>{name}</h1>
            <p>Drivers: {drivers.join(', ')}</p>
            <p>Championships: {constructorsChampionships}</p>
            <p>Team Principal: {teamPrincipal}</p>
            <p>Team Standing: {teamstanding}</p>
        </div>
    )
}