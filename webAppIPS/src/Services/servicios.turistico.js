import axios from "axios"
//const URL_SERVICIOS = "http://100.29.145.50/api/v1/services";



const URL_PRUEBA_SERVICIO = "http://127.0.0.1:2024/api/servicios";
//const sevircios=axios.create({URL_SERVICIOS});

export function getServiciosTuristico() {
  return axios.get(URL_PRUEBA_SERVICIO);


}
export function postServicioTuristico(servicio) {

  return axios.post(URL_PRUEBA_SERVICIO, servicio);
}

export function updateServicioTuristico(id, servicio) {
  console.log("se envia ",servicio)
  return axios.put(URL_PRUEBA_SERVICIO + '/' + id, servicio)
}

export function getServicioPorId(id) {
  return axios.get(URL_PRUEBA_SERVICIO + '/' + id);
}

export function activarServicio(id) {
  return axios.put(URL_PRUEBA_SERVICIO+'/A/' + id );
}

export function inactivarServicio(id) {
  return axios.put(URL_PRUEBA_SERVICIO+'/I/' + id );
}
