 import axios from "axios"
const URL_SERVICIOS="https://rickandmortyapi.com/api/character";  
const URL_EMPLEADOS ="https://jsonplaceholder.typicode.com/users";
//const sevircios=axios.create({URL_SERVICIOS});
  
export function GetServiciosTuristico() {
  return axios.get(URL_SERVICIOS);


}
export function GetEmpleados(){
  return axios.get(URL_EMPLEADOS);

}