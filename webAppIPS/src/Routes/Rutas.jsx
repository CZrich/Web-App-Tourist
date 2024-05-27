import React from 'react'
import { createBrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Booter from '../Components/booter'
import { Outlet } from 'react-router-dom'
export default function Rutas() {
  return (
    <div>
        <NavBar/>
         

        <Booter/>
        
    </div>
  )
}
