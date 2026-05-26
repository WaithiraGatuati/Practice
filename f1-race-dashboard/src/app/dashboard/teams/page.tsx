import TeamCard from '@/components/cards/TeamCard'

export default function TeamsPage() {
    return (
        <main className='teams-page'>
            <h4>2026 Team Standings</h4>
            <div className='cards-container'>
                <TeamCard
                    name='Red Bull Racing'
                    logoUrl='https://api.dicebear.com/6.x/initials/svg?seed=Red+Bull'
                    drivers={[
                        { name: 'Max Verstappen', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=Max%20Verstappen' },
                        { name: 'Isaac Hadjer', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=Isaac%20Hadjer' },
                    ]}
                    teamstanding={4}
                    teamPrincipal='Laurent Mekies'
                    constructorsChampionships={6}
                />

                <TeamCard
                    name='Mercedes-AMG Petronas'
                    logoUrl='https://api.dicebear.com/6.x/initials/svg?seed=Mercedes'
                    drivers={[
                        { name: 'George Russell', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=George%20Russell' },
                        { name: 'Kimi Antonelli', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=Kimi%20Antonelli' },
                    ]}
                    teamstanding={1}
                    teamPrincipal='Toto Wolff'
                    constructorsChampionships={8}
                />

                <TeamCard
                    name='Atlassian Williams Racing'
                    logoUrl='https://api.dicebear.com/6.x/initials/svg?seed=Williams'
                    drivers={[
                        { name: 'Carlos Sainz', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=Carlos%20Sainz' },
                        { name: 'Alexander Albon', imageUrl: 'https://api.dicebear.com/6.x/identicon/svg?seed=Alexander%20Albon' },
                    ]}
                    teamstanding={1}
                    teamPrincipal='James Vowles'
                    constructorsChampionships={8}
                />
            </div>
        </main>
    )
}
