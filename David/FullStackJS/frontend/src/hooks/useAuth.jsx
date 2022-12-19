import {useContext} from 'react';//extrae los datos del context
import AuthContext from '../context/AuthProvider';//indentifica de que context se deben traer los datos.

const useAuth = () => {
    return useContext(AuthContext);//para hacer disponibles los valores del provider 
}

export default useAuth;