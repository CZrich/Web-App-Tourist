import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../context/ContextoAuth"
export default function AsideBar() {

  const { authState } = useAuth();
  const { role } = authState;
  return (
    <div className=' flex flex-col gap-y-4 bg-stone-800  h-full text-white text-xl ml-4'>



      {
        role === "admin" && (

          <>

            <Link to="servicios" className='flex items-center '><img src='assets/icons/icons8-servicios-64.png' className='w-[2rem] m-2' ></img> Servicios </Link>



            <Link to="paquetes" className='flex items-center'> <img src="assets/icons/paquetes.png" alt="icono" className='w-[2rem] m-2' />Paquetes</Link>
            <Link to="empleados" className='flex items-center'> <img src="assets/icons/empleados50.png" alt="icono" className='w-[2rem] m-2' />Empleados</Link>
            {/*<Link to="clientes">Clientes</Link>*/}



          </>
        )

      }

      {
        role === "empleado" && (

          <>
            <Link to="servicios" className='flex items-center '><img src='assets/icons/icons8-servicios-64.png' className='w-[2rem] m-2' ></img> Servicios </Link>



            <Link to="paquetes" className='flex items-center'> <img src="assets/icons/paquetes.png" alt="icono" className='w-[2rem] m-2' />Paquetes</Link>

            {/*<Link to="clientes">Clientes</Link>*/}



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
