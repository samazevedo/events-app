import { getFeaturedEvents } from '../event-data'

function HomePage() {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
export default HomePage
