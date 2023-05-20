import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import SingleToy from '../Pages/SingleToy/SingleToy';
import AddToys from '../Pages/AddToys/AddToys';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [ 
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element:<Register></Register>
        },
        {
          path: 'single-toy/:id',
          element:<SingleToy></SingleToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'add-toy',
          element: <AddToys></AddToys>
        }
      ]
    },
  ]);

export default router;