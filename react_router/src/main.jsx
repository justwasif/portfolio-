import React, { Children, useState } from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import Layout from './component/Layout.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
