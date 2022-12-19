import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/Axios';

const AuthContext = createContext();//hacemos referencia a como se va a llamar el context de este provider

//un componente padre que tendrá como componentes hijos a todos los componentes de la app.
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if(!token) return

            const config = {
                headers: {
                   "Content-Type": "application/json",
                   Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await clienteAxios('/veterinarios/perfil', config)
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})  
            }
        }
        autenticarUsuario();
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export {
    AuthProvider
};

export default AuthContext;