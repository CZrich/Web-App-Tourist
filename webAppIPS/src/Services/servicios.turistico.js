import React from 'react'
const URL_SERVICIOS="https://rickandmortyapi.com/api/character";
  
export default  async function ServiciosTuristico() {
  let perso=[];
   console.log("entre a riki y ,prty");
   await fetch(URL_SERVICIOS)
   .then(data =>  data.json())
   .then(res=>{
    //console.log("data",res.results);
    //return res.results;
    perso=  [...res.results];
   })
   .catch((err)=>{
    console.log(err)
   })
 console.log("array");
 console.log(perso);
 return perso;
}
ServiciosTuristico();
