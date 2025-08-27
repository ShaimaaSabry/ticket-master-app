import { Card } from 'antd';
import { Link } from 'react-router-dom'

import { Event} from "../../domain/Event";
import {useState, useEffect} from "react";
import { fetchEvents } from '../../api/eventApi';

export default function Home() {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(
        () => {
            fetchEvents()
                .then(
                    data => {
                        console.log("events:" + data)
                        setEvents(data)
                        console.log("events state:" + events)
                    }
                )
        },
        []
    )

    return (
        <div>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                {
                    events.map(
                        e => (
                                <Card key={e.id} style={{width: 400, padding: 0}}>
                                    <Link to={`/event/${e.id}`} style={{display: 'block'}}>
                                        <img src={e.imageUrl} alt={e.name} style={{width: '100%', height: 100, display: 'block', margin: 0, borderRadius: 0, objectFit: 'cover'}} />
                                        <h3>{e.name}</h3>
                                        <p>{e.startTime}</p>
                                        <p>{e.venue.name}</p>
                                    </Link>
                                </Card>
                        )
                    )
                }
            </div>
        </div>
    )
}