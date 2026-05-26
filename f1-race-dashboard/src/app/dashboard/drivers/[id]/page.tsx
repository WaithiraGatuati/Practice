import drivers from '@/data/drivers.json'

export default function DriverProfile({ params }: { params: { id: string } }) {
    const driver = drivers.find((item) => item.id === params.id)

    if (!driver) {
        return (
            <main className="drivers-page">
                <h4>Driver not found</h4>
            </main>
        )
    }

    return (
        <main className="drivers-page">
            <h4>{driver.name}</h4>
            <div className="cards-container">
                <div className="card">
                    <p>Team: {driver.team}</p>
                    <p>Position: {driver.position}</p>
                </div>
            </div>
        </main>
    )
}