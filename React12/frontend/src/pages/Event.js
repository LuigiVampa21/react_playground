import React, { Suspense, useState } from 'react'
import EventList from '../components/EventsList';

import axios from 'axios';
import { defer, useLoaderData, Await } from 'react-router-dom';

const Event = () => {

  const { events } = useLoaderData();
  return (
    <Suspense fallback={ <p style={{textAlign: 'center'}}>Loading...</p> }>
      <Await resolve={events} >
        {(loadedEvents) => <EventList events={loadedEvents}></EventList>}
      </Await>
    </Suspense>
  )
}

const loadEvents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    // console.log(response);
    const {data} = response;
    return data;
  } catch (err) {
    throw { status: "error", data: err.message };
  }
}

export const loader = () => {

 return defer({
    events: loadEvents(),
  })

};

export default Event;