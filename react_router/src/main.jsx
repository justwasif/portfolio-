import React, { Children, useState } from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import GrokBot from './component/GrokBot.jsx'
import Layout from './component/Layout.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Github from './component/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{path:'home',element:<Home/>},
//       {path:'about',element:<About/>},
//       {path:'contact',element:<Contact/>},
//       {path:'github',element:<Github/>}
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='home'element={<GrokBot/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='git'element={<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
