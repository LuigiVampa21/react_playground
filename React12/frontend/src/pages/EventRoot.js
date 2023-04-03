import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const EventRoot = () => {
  return (
    <>
    <ul>
        <li> <NavLink to="/events">All Events</NavLink> </li>
        <li> <NavLink to="/events/new">New Event</NavLink> </li>
    </ul>
    <Outlet />
    </>
  )
}

export default EventRoot