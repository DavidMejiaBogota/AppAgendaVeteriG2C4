//rafce tab
//aca todo lo que es de autenticacion

import {Outlet} from "react-router-dom"
const AuthLayout = () => {
  return (
    <>

    <h1>Desde auth layout</h1>

    <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-8 p-5">
    <Outlet />
    </main>
    </>
  )
}

export default AuthLayout