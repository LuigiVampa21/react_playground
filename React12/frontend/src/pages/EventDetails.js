import React, { Suspense } from 'react'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { useRouteLoaderData, redirect, Await, defer } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { event, events } = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>} >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>} >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>

  )
}
export default EventDetails

const loadEvent = async (id) => {
  try {
    const response = await axios.get('http://localhost:8080/events/' + id);
    const { data } = response
    return data;
  } catch (err) {
    console.log(err);
    throw { status: 'error', data: err.message };
  }
}

const loadEvents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    const { data } = response;
    return data;
  } catch (err) {
    throw { status: "error", data: err.message };
  }
}

export const loader = async ({ req, params }) => {
  const { id } = params;

  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })

}

export const action = async ({ params }) => {
  try {
    const { id } = params;
    const response = await axios.delete('http://localhost:8080/events/' + id);
    return redirect('/events');
  } catch (err) {
    throw ({ status: 'error', data: err.message });
  }
}


