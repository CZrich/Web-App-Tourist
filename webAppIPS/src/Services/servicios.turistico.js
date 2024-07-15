 import axios from "axios"
const URL_SERVICIOS="http://100.29.145.50/api/v1/services";  
const URL_EMPLEADOS ="https://jsonplaceholder.typicode.com/users";


const URL_PRUEBA_SERVICIO="http://127.0.0.1:2024/api/servicios";
//const sevircios=axios.create({URL_SERVICIOS});
  
export function getServiciosTuristico() {
  return axios.get(URL_PRUEBA_SERVICIO);


}
export function postServicioTuristico(servicio){

  return axios.post(URL_PRUEBA_SERVICIO,servicio);
}

export function CrearProducto(producto){
  return producApi.post('/',producto);

}
export function getProducto(id){
  return producApi.get('/'+id+'/');
}
export function EliminarProducto(id){
return producApi.delete('/'+id);
}
export function ActualizarProducto(id,producto){
  return producApi.put('/'+id+'/',producto);
}
export function GetEmpleados( ){
  return axios.get(URL_EMPLEADOS);
}