import React from 'react'

export default function CardServicioTuristico({ servicio }) {


  return (

    <div>
      <img src={"img_servicio.jpg"} alt={"iria la imagen"}  className='rounded-lg w-[200px]'/>
    

      <h3>{servicio.nombre}</h3>


      <p> {servicio.descripcion}</p>
      <p> Destino: {servicio.destino}</p>
      <p> Fecha:{servicio.fecha}</p>
      <p>Precio:{servicio.precio}</p>




    </div>
  )
}
