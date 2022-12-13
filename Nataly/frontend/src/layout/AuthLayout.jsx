//rafce tab
//aca todo lo que es de autenticacion

import {Outlet} from "react-router-dom"
const AuthLayout = () => {
  return (
    <>

    <h1>Desde auth layout</h1>


    <Outlet />
    </>
  )
}

export default AuthLayout