import axios from "axios"


const URL_PAQUETES="http://127.0.0.1:2024/api/paquetes"
const URL_PAQUETES_PRUEBA="/paquetes.json";
//const sevircios=axios.create({URL_SERVICIOS});
  
export function getPaquetesTuristico() {
  return axios.get(URL_PAQUETES);


}
