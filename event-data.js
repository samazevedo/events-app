const EVENTS_DATA = [
    {
        id: 'evt01',
        title: 'Programming for everyone',
        description: 'Everyone can learn to code! We learn together everyday',
        location: '123 startprogramming st, 01010 Dev City',
        date: '2020-10-10',
        image: 'images/programming.jpg',
        isFeatured: true,
    },
    {
        id: 'evt02',
        title: 'Networking for introverts',
        description:
            "The hardest thing is not coding for you right. Let' build our Networking together",
        location: '123 stopbeingshy st,  01010 Dev City',
        date: '2020-10-10',
        image: 'images/networking.jpg',
        isFeatured: false,
    },
    {
        id: 'evt03',
        title: 'How to be successful programming',
        description:
            'The path to sucess in the programming world. How to find the shortcuts to success',
        location: '123 successfulldev st, 01010 Dev City',
        date: '2020-10-10',
        image: 'images/success.jpg',
        isFeatured: true,
    },
]

export function getFeaturedEvents() {
    return EVENTS_DATA.filter((event) => event.isFeatured)
}
export function getAllEvents() {
    return EVENTS_DATA
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter

    let filteredEvents = EVENTS_DATA.filter((event) => {
        const eventDate = new Date(event.date)
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        )
    })
}
export function getEventById(id) {
    return EVENTS_DATA.find((event) => event.id === id)
}
