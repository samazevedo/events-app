import { getAllEvents } from '../../event-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

function AllEventsPage() {
    const router = useRouter()
    const allEvents = getAllEvents()

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList events={allEvents} />
        </Fragment>
    )
}
export default AllEventsPage
