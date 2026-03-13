import axios from "axios"


const URL_PAQUETES="http://127.0.0.1:2024/api/paquetes"

  
export function getPaquetesTuristico() {
  return axios.get(URL_PAQUETES);


}
