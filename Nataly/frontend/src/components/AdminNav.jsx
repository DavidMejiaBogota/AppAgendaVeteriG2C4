import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <>
    <nav className="flex gap-3 px-10 text-center place-content-center">
        <Link to="/admin/perfil"
        className="font-bold uppercase text-gray-600 mx-2 hover:text-violet-600 active:text-violet-800"
        >
            Perfil
        </Link>

        <Link to="/admin/cambiar-password"
        className="font-bold uppercase text-gray-600 mx-2 hover:text-violet-600 active:text-violet-800"
        >
            Cambiar Contraseña
        </Link>
    </nav>
    </>
  )
}

export default AdminNav