import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Allmeets from './body';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router';
import Mymeet from './mymeet';
import Addmeet from './addmeet';
import { RouterProvider } from 'react-router';
const AppLayout=()=>{
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}
const ways=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Allmeets/>
        },
        {
          path:"/mymeet",
          element:<Mymeet/>
        },
        {
          path:"/addmeet",
          element:<Addmeet/>
        },
      ]
    },
    
  
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);

