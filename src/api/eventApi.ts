import { Event} from "../domain/Event";

export const API_ROOT = "http://localhost:8080/v1/events"

type fetchEventResponse = {
    data: Event[]
}

export async function fetchEvents(): Promise<Event[]> {
    const response = await fetch(
        API_ROOT
    )

    if (!response.ok) {
        throw new Error(
            `Failed to fetch events: ${response.statusText}`,
        );
    }

    const responseBody = await response.json()
    console.log("Events fetched:", responseBody)
    return responseBody.data as Event[]
}

export async function fetchEvent(id: number): Promise<Event> {
    const url = `${API_ROOT}/${id}`
    const response = await fetch(
        url
    )

    if (!response.ok) {
        throw new Error(
            `Failed to fetch event: ${response.statusText}`,
        );
    }

    const responseBody = await response.json()
    console.log("Event fetched:", responseBody)
    return responseBody as Event
}