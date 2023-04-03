import React, { useState } from 'react'
import EventList from '../components/EventsList';

// import { NavLink } from 'react-router-dom'

// const DUMMY_EVENTS = [
//   {
//     id: 1,
//     title: 'Test 1',
//     link: 'test-1'
//   },
//   {
//     id: 2,
//     title: 'Test 2',
//     link: 'test-2'
//   },
//   {
//     id: 3,
//     title: 'Test 3',
//     link: 'test-3'
//   },
// ]

// import { useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
// import axios from axios;

const Event = () => {

  // const [isLoading, setIsLoading] = useState("");
  const [events, setEvents ] = useState(null);
  const [error, setError] = useState(false);

  // useEffect(() => {
    const { status, response } = useLoaderData();
    const {data} = response
    if(status === "success"){
      // console.log(data);
    }
    if(status === "error"){
      setError(data)
    }
    // setEvents(data);
    // (async() => {
    //   setIsLoading(true);
    //   try{
    //     const response = await axios.get("http://localhost:8080/events");
    //     // console.log(response);
    //     const {data} = response;
    //     setEvents(data);
    //     console.log(events);
    //   }catch(err){
    //     setError(err.message);
    //   }finally{
    //     setIsLoading(false);
    //   }
    // })() 
  // }, []);

// const mapEvents = DUMMY_EVENTS.map(event => (
//   // <li>
//   //   {event.id} - {event.title} - <NavLink to={event.link}> navigate to event details </NavLink>
//   // </li>
// ))



  return (
    <>
    <div>
      <ul>
        {/* {DUMMY_EVENTS.length > 0 && mapEvents} */}
        {/* {!isLoading && !error && <EventList events={events} /> } */}
        {!error && <EventList events={data} />}
      </ul>
    </div>
    </>
  )
}

export const loader = async() => {
  // setIsLoading(true);
  try{
    const response = await axios.get("http://localhost:8080/events");
    return {status: "success", response};
  }catch(err){
    // setError(err.message);
    throw {status: "error", data: err.message};
    // return {status: "error", data: err.message};
  }
  // finally{
  //   // setIsLoading(false);
  // }
};

export default Event;