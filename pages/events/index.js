import { getAllEvents } from '../../event-data'
import EventList from '../../components/events/event-list'

function AllEventsPage() {
    const allEvents = getAllEvents()
    return (
        <div>
            <EventList events={allEvents} />
        </div>
    )
}
export default AllEventsPage
