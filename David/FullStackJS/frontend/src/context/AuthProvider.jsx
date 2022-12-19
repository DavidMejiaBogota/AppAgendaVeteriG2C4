import { useState, useEffect, createContext } from 'react';
const AuthContext = createContext();//hacemos referencia a como se va a llamar el context de este provider

//un componente padre que tendrá como componentes hijos a todos los componentes de la app.
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
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