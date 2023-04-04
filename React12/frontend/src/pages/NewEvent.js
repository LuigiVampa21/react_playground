import React from 'react'
import axios from 'axios';
import EventForm from '../components/EventForm';
import { redirect } from 'react-router-dom';

const NewEvent = () => {
  return (
    <EventForm event={null} method={'post'} />
  )
}

export default NewEvent;
