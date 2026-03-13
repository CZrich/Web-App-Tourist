
//const URL_SERVICIOS = "http://100.29.145.50/api/v1/services";
import API from "./interceptor";


//const URL_PRUEBA_SERVICIO = "http://127.0.0.1:2024/api/servicios";
//const sevircios=axios.create({URL_SERVICIOS});
// Al usar API.get, automáticamente se dispara el interceptor que añade el token
export function getServiciosTuristico() {
  return API.get("/servicios"); 
}

export function postServicioTuristico(servicio) {
  return API.post("/servicios", servicio);
}

export function updateServicioTuristico(id, servicio) {
  return API.put(`/servicios/${id}`, servicio);
}

export function getServicioPorId(id) {
  return API.get(`/servicios/${id}`);
}

export function activarServicio(id) {
  return API.put(`/servicios/A/${id}`);
}

export function inactivarServicio(id) {
  return API.put(`/servicios/I/${id}`);
}
