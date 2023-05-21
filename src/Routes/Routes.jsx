import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import SingleToy from '../Pages/SingleToy/SingleToy';
import AddToys from '../Pages/AddToys/AddToys';
import BlogPage from '../Pages/Blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';
import MyToy from '../Pages/MyToy/MyToy';
import PrivateRoutes from './PrivateRoutes';

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
        },
        {
          path: 'blog',
          element: <BlogPage></BlogPage>
        },
        {
          path:'all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/bookings')
        },
        {
          path: 'all-toys/:id',
          element:<ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        },
        {
          path: 'my-toys',
          element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
      ]
    },
  ]);

export default router;