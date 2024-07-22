import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from "../context/ContextoAuth"
export default function AsideBar() {

  const { authState } = useAuth();
  const { role } = authState;
    return (
        <div 
        
        className=' flex flex-col gap-y-4 bg-stone-600   text-white text-xl ml-4'
        >

          

{
                  role ==="admin" && (

                    <>
                    <Link to="servicios"> Servicios </Link>
                   <Link to="paquetes">Paquetes</Link>
                   <Link to="empleados">EMPLEADOS</Link> 
                   <Link to="clientes">Clientes</Link>

                    
                    
                    </>
                  )
                  
                }

{
                  role ==="empleado" && (

                    <>
                    <Link to="servicios"> Servicios </Link>
                   <Link to="paquetes">Paquetes</Link>
                 
                   <Link to="clientes">Clientes</Link>

                    
                    
                    </>
                  )
                  
                }


{ /*
                  role  && (

                    <>
                    <Link to="servicios"> Servicios </Link>
                   <Link to="paquetes">Paquetes</Link>
                 

                    
                    
                    </>
                  )
                  
                */}



                

           


        </div>
    )
}
