import EventItem from './event-item'
function EventList(props) {
    const { events } = props
    return (
        <ul>
            {items.map((event) => (
                <EventItem />
            ))}
        </ul>
    )
}
