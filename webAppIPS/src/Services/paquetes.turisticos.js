import axios from "axios"



const URL_PAQUETES="/paquetes.json";
//const sevircios=axios.create({URL_SERVICIOS});
  
export function getPaquetesTuristico() {
  return axios.get(URL_PAQUETES);


}
