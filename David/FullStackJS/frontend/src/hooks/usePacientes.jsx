import {useContext} from 'react';//extrae los datos del context
import PacientesContext from '../context/PacientesProvider';//indentifica de que context se deben traer los datos.

const usePacientes = () => {
    return useContext(PacientesContext);//para hacer disponibles los valores del provider 
}

export default usePacientes;