import React from 'react'
import AdapterServicio from '../Adapters/adapter/AdapterServicio'
import ListaServicios from '../Components/ListaServicios'

export default function Home() {
  return (
    <div className='h-auto '>
        <h2>  
          Home
        </h2>
       <ListaServicios/>
      
      </div>
  )
}
