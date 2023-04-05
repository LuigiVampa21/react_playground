import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../utils/auth';

function RootLayout() {

  const token = useLoaderData();
  const submit = useSubmit();

  const tokenDuration = getTokenDuration();

  useEffect(() => {
    if(!token){
      return;
    }
    if(token === 'EXPIRED'){
      submit(null, {action: '/logout', method: 'post'})
      return;
    }
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, timeout)
  }, [tokenDuration, submit])

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
