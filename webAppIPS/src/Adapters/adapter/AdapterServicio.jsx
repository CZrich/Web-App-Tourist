import React from 'react'
import { GetServiciosTuristico } from '../../Services/servicios.turistico'
import { useState,useEffect} from 'react'

export default function AdapterServicio() {

  const [sevi,setServicios]=useState(null);
   useEffect(()=>{
    async function cargarServicio(){
        const ans= await GetServiciosTuristico(setServicios);
        console.log(ans.data.results);
        
    }
    cargarServicio();

   },[]);
  console.log("servi is",sevi);
    return (
        <div>
            <h1>asdalsfnaksnfkals</h1>
            <ul>
                {sevi?.map((person) =>{



                    
                })


               
           
           }


            </ul>


        </div>
    )
}
