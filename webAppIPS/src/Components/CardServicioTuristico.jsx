import React from 'react'

export default function CardServicioTuristico({ servicio }) {


  return (

    <div>
      <img src={servicio.image} alt={servicio.name}  className='rounded-lg'/>
    

      <h3>{servicio.name}</h3>


      <p>estado: {servicio.status}</p>
      <p> origen: {servicio.origin.name}</p>




    </div>
  )
}
