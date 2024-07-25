import React from 'react'

export default function CardPaqueteTuristico({ paquete }) {



  return (
    <div className='bg-white  m-4 p-4   rounded-lg shadow-md overflow-hidden'>
      <div className='grid grid-rows-2 grid-cols-2'>
        { 
        paquete.servicios.map(( item) => (
          <img src={`http://127.0.0.1:2024/api/servicios/${item.id}/imagen`} alt={" imagen de los paquetes"} className='w-[200px]'></img>
        ))
          
        }

      </div>
     
      <h3 className='text-lg font-semibold my-4'>Serivicios</h3>
      <ul>
        {


          paquete.servicios.map(( item) => (

            <li key={item.id} className='text-slate-500	font-medium '> - {item.nombre}</li>
          ))
        }

      </ul>
     <div className='my-2'>
     <p className='text-slate-800	font-semibold text-lg '>Costo:</p>
      <p> ${paquete.paqCos}</p>
     </div>
     

    </div>
  )
}
