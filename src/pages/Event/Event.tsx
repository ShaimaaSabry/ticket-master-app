import { Button, Card } from 'antd';
import { useEffect, useState } from "react";
import { fetchEvent } from "../../api/eventApi";
import { useParams } from 'react-router-dom';
import { Event as DomainEvent } from '../../domain/Event';

export default function Event() {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<DomainEvent | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setError(null);
        const eventId = Number(id);
        fetchEvent(eventId)
            .then(setEvent)
            .catch(() => {
                setError('Failed to load event');
                setEvent(null);
            })
            .then(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return null;

    return (
        <div>
            <div>
                <img src={event.imageUrl} alt={event.name} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} />
                <h1>{event.name}</h1>
                <p>{event.startTime}</p>
                <p>{event.venue?.name}</p>
            </div>
            <h1>Tickets</h1>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {event.ticketCategories?.map(tc => (
                    <Card key={tc.id} style={{ width: 400 }}>
                        <p>{tc.name}</p>
                        <p>EGP {tc.price}</p>
                        <Button type="primary">Buy Now</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}