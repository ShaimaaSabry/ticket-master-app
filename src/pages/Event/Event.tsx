import { Button, Card } from 'antd';

const event =  {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed',
        ticketCategories: [
            {
                id: 1,
                name: 'VIP Lounge',
                price: 11000
            },
            {
                id: 2,
                name: 'Standard',
                price: 5000
            },
            {
                id: 3,
                name: 'Economy',
                price: 2500
            }
        ]
    }

export default function Event() {
    return(
        <div>
            <div>
                <img src={event.imageUrl} />
                <h1>{event.name}</h1>
                <p>{event.startTime}</p>
                <p>{event.venue}</p>
            </div>

            <h1>Tickets</h1>

            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            {
                event.ticketCategories.map( t => (
            <Card style={{width: 400}}>
                <p>{t.name}</p>
                <p>EGP {t.price}</p>
                <Button type={"primary"}>Buy Now</Button>
            </Card>
                    )
                )
            }
            </div>

        </div>
    )
}