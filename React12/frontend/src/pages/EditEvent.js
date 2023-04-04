import React from 'react'
import EventForm from '../components/EventForm';

import { useRouteLoaderData } from 'react-router-dom';

const EditEvent = () => {

  const _event = useRouteLoaderData('event-detail');
  const { data } = _event; 
  const { event } = data;

  return (
    <EventForm event={event} method={'patch'} />
  )
}

export default EditEvent;
