import TeamCard from '@/components/cards/TeamCard'

export default function TeamsPage() {
    return (
        <main className='teams-page'>
            <h4>2026 Team Standings</h4>
            <div className='cards-container'>
                <TeamCard
                    name="Red Bull Racing"
                    drivers={["Max Verstappen", "Isaac Hadjer"]}
                    teamstanding={4}
                    teamPrincipal="Laurent Mekies"
                    constructorsChampionships={6}
                />

                <TeamCard
                    name="Mercedes-AMG Petronas"
                    drivers={["George Russell", "Kimi Antonelli"]}
                    teamstanding={1}
                    teamPrincipal="Toto Wolff"
                    constructorsChampionships={8}
                />

                <TeamCard
                    name="Atlassian Williams Racing"
                    drivers={["Carlos Sainz", "Alexander Albon"]}
                    teamstanding={1}
                    teamPrincipal="James Vowles"
                    constructorsChampionships={8}
                />
            </div>
        </main>
    )
}
