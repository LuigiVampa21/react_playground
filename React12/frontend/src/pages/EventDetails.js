import React from 'react'
import EventItem from '../components/EventItem';
import { Link, useRouteLoaderData, useParams } from 'react-router-dom';

import axios from 'axios';


const EventDetails = () => {

  const {data} = useRouteLoaderData('event-detail');
  // const { data } = useLoaderData();
  const { event } = data;
  
  // const params = useParams();
  // const { id } = params;


  return (
    <>
      {/* <div>EventDetails</div>
    <p>{id}</p>
    <p><Link to=".." relative='path'>Back</Link></p> */}
      <EventItem event={event} />
    </>

  )
}

export default EventDetails

export const loader = async ({req,params}) => {
  const { id } = params;
  try {
    const response = await axios.get('http://localhost:8080/events/' + id);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw {status: 'error', data: err.message};
  }
}
