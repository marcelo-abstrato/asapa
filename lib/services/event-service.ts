import prisma from "@/lib/prisma";

/**
 * Fetches and processes events from the database
 * @returns Object containing future events, past events, and latest events
 */
export async function getEvents() {
    const now = new Date();

    // Fetch all events from the database
    const allEvents = await prisma.event.findMany({
        orderBy: {
            startDate: 'asc'
        }
    });

    // Filter events based on current date
    const futureEvents = allEvents
        .filter(event => new Date(event.endDate) > now)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

    const pastEvents = allEvents
        .filter(event => new Date(event.endDate) <= now)
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    // Get the latest 4 events for the home page
    const latestEvents = [...futureEvents, ...pastEvents]
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        .slice(0, 4);

    // Check if there are any events
    const hasEvents = latestEvents.length > 0;

    return {
        futureEvents,
        pastEvents,
        latestEvents,
        hasEvents
    };
}
