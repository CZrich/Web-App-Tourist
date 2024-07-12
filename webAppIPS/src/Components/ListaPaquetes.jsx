import React ,{useEffect, useState}from 'react'
import CardPaqueteTuristico from './Cards/CardPaqueteTuristico' 
import { getPaquetesTuristico } from '../Services/paquetes.turisticos'

export default function ListaPaquetes() {
    const [paquetes,setPaquetes]=useState(null);

    useEffect(()=>{
        async function cargaPaquetes(){
            const res= await getPaquetesTuristico();
            console.log(res.data.paquetes)
            setPaquetes(res.data.paquetes)
        }
        cargaPaquetes();


    },[])
   
  return (
    <div className='flex flex-wrap bg-green-400 gap-5'>

    {
        paquetes?.map( (data)=>(
           <CardPaqueteTuristico key={data.id} paquete={data}/>

        ))
    }


    </div>
  )
}
