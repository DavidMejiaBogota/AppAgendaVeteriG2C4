import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/Axios';

const AuthContext = createContext();//referencia para llamar el context de este provider

//componente padre tendrá como componentes hijos a todos los componentes de la app.
const AuthProvider = ({children}) => {
   
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                setCargando(false)
                return
            }

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

            setCargando(false);
        }
        autenticarUsuario();
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil = datos => {
        console.log(datos)
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil
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