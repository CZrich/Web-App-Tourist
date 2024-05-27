import React from 'react'
 import {Link, Outlet} from "react-router-dom"
export default function NavBar() {
  return (
    <div>

     <ul className='items-center flex flex-row space-x-10 bg-sky-400 h-[60px] justify-end'>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="servicios">Servicios turisticos</Link></li>
        <li> <Link to="paquetes">Paquetes turisticos</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="registrarse">Registrarse</Link></li>

     </ul>
      <div>
         <Outlet></Outlet>

      </div>

    </div>
  )
}
