import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Roots";
import Home from './pages/Home';
import Event, { loader as eventLoader } from './pages/Event';
import EventDetails, { loader as detailLoader } from './pages/EventDetails';
import EditEvent from './pages/EditEvent';
import NewEvent, { action as postNewEvent } from './pages/NewEvent';
import EventRoot from "./pages/EventRoot";
import Error from "./pages/Error";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'events',
        element: <EventRoot />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Event />,
            loader: eventLoader
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
              },
              {
                path: 'edit',
                element: <EditEvent />
              }
            ]
          },
          {
            path: 'new',
            element: <NewEvent />,
            action: postNewEvent
          }
        ]
      },
      // {
      //   path: 'events/new',
      //   element: <NewEvent />
      // },
      // {
      //   path: 'events/:id',
      //   element: <EventDetails />
      // },
      // {
      //   path: '/events/:id/edit',
      //   element: <EditEvent />
      // }
    ]
  },
  // {
  //   path: '/events',
  //   element: <Event />
  // },
  // {
  //   path: '/events/new',
  //   element: <NewEvent />
  // },
  // {
  //   path: '/events/:id',
  //   element: <EventDetails />
  // },
  // {
  //   path: '/events/:id/edit',
  //   element: <EditEvent />
  // }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
