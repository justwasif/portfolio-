import React, { Children, useState } from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import Layout from './component/Layout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{path:'',element:<Home/>}]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
