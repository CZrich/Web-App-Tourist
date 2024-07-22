import React from 'react'

import { useEffect,useState } from 'react';
import CardServicioTuristico from './Cards/CardServicioTuristico';
import { getServiciosTuristico } from '../Services/servicios.turistico';

export default function ListaServicios() {
  const [sevicios,setServicios]=useState(null);
   useEffect(()=>{
    async function cargarServicio(){
      const res=  await getServiciosTuristico();
       
        console.log(res.data);
         //return data;
        // setServicios(res.data);
         setServicios(res.data.filter(item=>item.estado!="I"));
      
       }
  
    
      
     cargarServicio();

   },[]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-muted rounded-lg">
        { sevicios?.map((data)=>(
     
     <CardServicioTuristico key={data.id} servicio={data}
     
      />
        ))
        
         
        }

    </div>
  )
}
