import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'


const Error = () => {

    const error = useRouteError();
    console.log(error);

  return (
    <PageContent title="Oops Something went wrong">
        <p>{error.data}</p>
    </PageContent>
  )
}

export default Error