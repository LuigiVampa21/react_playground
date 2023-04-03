import React from 'react'
import axios from 'axios';
import EventForm from '../components/EventForm';
import { redirect } from 'react-router-dom';

const NewEvent = () => {
  return (
    <EventForm event={null} />
  )
}

export default NewEvent;

export const action = async ({ request, params }) => {
  try {
    const form = await request.formData();
    const title = form.get("title")
    const image = form.get("image")
    const date = form.get("date")
    const description = form.get("description")
    const eventObj = { title, image, date, description };
    await axios.post('http://localhost:8080/events', eventObj);
    return redirect('/events');
  } catch (err) {
    console.log(err);
    throw { status: 'error', data: err.message }
  }
}