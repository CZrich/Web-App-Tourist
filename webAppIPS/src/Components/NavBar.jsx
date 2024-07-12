import React from 'react'
 import {Link, Outlet} from "react-router-dom"
export default function NavBar() {
  return (
    <div className="text-white bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between bg-slate-950	">
      <Link to="/" className='text-xl'>MariaBelen Travel</Link>
    
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to= "administrar">Administrar</Link>
        <Link to="servicios">Servicios turisticos</Link>
         <Link to="paquetes">Paquetes turisticos</Link>
        <Link to="login">Login</Link>
        <Link to="registrarse">Registrarse</Link>

      </nav>

     

   
      
      
      
    </div>
  )

}
