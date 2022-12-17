import axios from 'axios';

const clienteAxios = axios.create({
   baseURL: `${import.meta.env.VITE_BACKEND_URL}/api` //endPoint/dominio principal en el cual se van a hacer todas las peticiones.
});

export default clienteAxios;