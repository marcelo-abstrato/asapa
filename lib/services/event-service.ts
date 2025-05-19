import {futureEvents as mockFutureEvents, pastEvents as mockPastEvents} from "@/mocks/events";

/**
 * Fetches and processes events from mock data
 * @returns Object containing future events, past events, and latest events
 */
export async function getEvents() {
    // Use mock data instead of database
    const futureEvents = [...mockFutureEvents]
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

    const pastEvents = [...mockPastEvents]
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
