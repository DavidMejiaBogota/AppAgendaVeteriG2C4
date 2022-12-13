//rafce tab
//aca todo lo que es de autenticacion

import {Outlet} from "react-router-dom"
const AuthLayout = () => {
  return (
    <>


    <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-8 p-5 items-center ">
    <Outlet />
    </main>
    </>
  )
}

export default AuthLayout