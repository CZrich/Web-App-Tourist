 import axios from "axios"
const URL_SERVICIOS="http://100.29.145.50/api/v1/services";  
const URL_EMPLEADOS ="https://jsonplaceholder.typicode.com/users";


const URL_PRUEBA_SERVICIO="/servicios.json";
//const sevircios=axios.create({URL_SERVICIOS});
  
export function GetServiciosTuristico() {
  return axios.get(URL_PRUEBA_SERVICIO);


}
export function GetEmpleados(){
  return axios.get(URL_EMPLEADOS);

}