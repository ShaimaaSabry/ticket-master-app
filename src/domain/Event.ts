export type Event = {
    id: number
    imageUrl: string
    name: string
    // description: string
    startTime: string // ISO string
    venue: Venue
    ticketCategories?: TicketCategory[]
}

export type Venue = {
    id: number
    name: string
}

export type TicketCategory = {
    id: number
    name: string
    price: number
}