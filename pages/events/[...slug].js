import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../event-data'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'

function FilteredEventsPage() {
    const router = useRouter()

    const filterData = router.query.slug

    if (!filterData) {
        return <p className='center'>Loading</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2020 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                <div className='center'>
                    <h2>Invalid Filter</h2>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <div className='center'>
                    <h2>Nothing Found</h2>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1)
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </Fragment>
    )
}

export default FilteredEventsPage
