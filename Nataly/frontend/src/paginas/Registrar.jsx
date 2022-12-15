
import { useState } from "react";
import {Link} from "react-router-dom"

const Registrar = () => {

const [ nombre, setNombre ] = useState("")

const [ email, setEmail ] = useState("")

const [ password, setPassword ] = useState("")

const [ repetirPassword, setRepetirPassword ] = useState("")

const handleSubmit = e =>{
    e.preventDefault()
    if ([nombre, email, password, repetirPassword].includes("")) {
        console.log("campos vacios");
        return
    }
    
    if (password !== repetirPassword) {
        console.log("Las contarseñas deben coincidir");
        return
    }

    if (password.length < 6) {
        console.log("La contarseña es muy corta, agrega mínimo 6 caracteres.");
        return
    }
}

  return (
    <>
    <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
            Crea tu Cuenta y Administra tus
            <span className="text-black"> Pacientes</span>
        </h1>
    </div>
    

    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                    Nombre
                </label>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={nombre}
                    onChange= {e => setNombre(e.target.value)}
                />
            </div>


            <div className="my-5">
                <label
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                    Email
                </label>
                <input
                    type="text"
                    placeholder="Email de Registro"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={email}
                    onChange= {e => setEmail(e.target.value)}
                />
            </div>


            <div className="my-5">
                <label
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                    Contraseña
                </label>
                <input
                    type="password"
                    placeholder="Tu contraseña"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={password}
                    onChange= {e => setPassword(e.target.value)}
                />
            </div>


            <div className="my-5">
                <label
                className="uppercase text-gray-600 block text-xl font-bold"
                >
                    Repetir Contraseña
                </label>
                <input
                    type="password"
                    placeholder="Repite tu contraseña"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={repetirPassword}
                    onChange= {e => setRepetirPassword(e.target.value)}
                />
            </div>


            <input 
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-lg
            text-white uppercase font-bold mt-5 hover:cursor-pointer
            md:w-auto"
            />


            </form>


            <nav className="mt-10 lg:flex lg:justify-between">
            <Link 
            className="block text-center my-5 text-gray-500"
            to="/">¿Ya tienes una cuenta? Inicia sesión</Link>
            <Link 
            className="block text-center my-5 text-gray-500"
            to="/olvide-password">Olvide mi contraseña</Link>
        </nav>

          </div>
    </>
  )
}

export default Registrar