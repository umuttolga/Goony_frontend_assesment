import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventPopUp from './components/EventPopUp';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';


const router = createBrowserRouter([{
  path:"/", 
  element: <LoginPage/>,
  errorElement: <ErrorPage/>
},{
  path:"/signup",
  element: <SignUpPage/>
},
{
  path:"/profile",
  element: <ProfilePage/>
},
{
  path:"/map",
  element: <MapPage/>
},
{
  path:"/popUp",
  element: <EventPopUp/>
}
])

const App = (props) => {
  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
