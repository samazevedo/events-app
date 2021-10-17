import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../event-data'

function HomePage() {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <h1>Home Page</h1>
            <EventList events={featuredEvents} />
        </div>
    )
}
export default HomePage
