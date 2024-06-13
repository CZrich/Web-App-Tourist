import React from 'react'
import { Link } from 'react-router-dom'

export default function AsideBar() {
    return (
        <div 
        
        className=' flex flex-col gap-y-4 bg-stone-600   text-white text-xl ml-4'
        >

          

                
                    <Link to="servicios"
                     className='hover:bg-stone-800 bg-yellow-300'
                    >
                    
                      Servicios
                    
                    </Link>

                
                    <Link to="paquetes">Paquetes</Link>

                
                    <Link to="empleados">EMPLEADOS</Link>

                

                
                    <Link to="clientes">Clientes</Link>

                

           


        </div>
    )
}
