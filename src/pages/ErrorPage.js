import React from 'react'
import { useRouteError, Link } from 'react-router-dom';
import Card from '../layout/Card';

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <Card bgColor="text-xl font-bold mt-[50%]">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p className='mb-10'>
      <i>{error.statusText || error.message}</i>
    </p>
    <Link className='border-2 px-8 bg-black rounded-xl' to="/">Take me home!</Link>
  </Card>
);
}
 

export default ErrorPage
