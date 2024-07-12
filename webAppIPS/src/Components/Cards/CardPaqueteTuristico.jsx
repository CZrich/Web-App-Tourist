import React from 'react'

export default function CardPaqueteTuristico({paquete}) {

  return (
    <div>
        <img src={"img_paquete.png"} alt={" imagen de los paquetes"} className='w-[400px]'></img>
        <h3>Serivicios</h3>
        {
            paquete.lista.map((i,item)=>(

                <ul key={i}>{item}</ul>
            ))
        }
         <p>costo:{paquete.costo}</p>


    </div>
  )
}
