import { Button, Card } from 'antd';
import { Link } from 'react-router-dom'

import { Event} from "../../types/Event";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

const events: Event[] = [
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
    {
        id: 2,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Sol Beach Access',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmznIfuB6lSriY6BjmusDzUUGHcT7wo_wog&s',
        name: 'Marassi Festival',
        startTime: 'Sep 02 | 09:00 PM',
        venue: 'Zed Park, Elsheikh Zayed'
    },
]

export default function Home() {
    return (
        <div>
            <NavigationMenu />
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                {
                    events.map(
                        e => (
                                <Card style={{width: 400}}>
                                    <Link to={`/event/${e.id}`}>
                                    <img src={e.imageUrl} />
                                    <h3>{e.name}</h3>
                                    <p>{e.startTime}</p>
                                    <p>{e.venue}</p>
                                    </Link>
                                </Card>
                        )
                    )
                }
            </div>
        </div>
    )
}