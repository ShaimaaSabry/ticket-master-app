export type Event = {
    id: number
    imageUrl: string
    name: string
    // description: string
    startTime: string // ISO string
    venue: string
    ticketCategories?: TicketCategory[]
}

export type TicketCategory = {
    id: number
    name: string
    price: number
}