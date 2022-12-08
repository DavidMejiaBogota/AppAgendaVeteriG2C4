import {Link } from 'react-router-dom'

const Resgistrar = () => {
    return (
      <>
        <div>
          <h1 className="text-indigo-600 font-black text-7xl text-center it">
            Crea tu Cuenta, y Administra tus <span className="text-black ">Pacientes</span>
          </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          <form>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="¡Ingresa tu nombre!"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />

            </div>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email de Registro"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />

            </div>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="¡Ingresa tu password!"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />

            </div>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Repetir Password
              </label>
              <input
                type="password"
                placeholder="¡Ingresa de nuevo tu password!"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />

            </div>

            <input
              type="submit"
              value="Iniciar Sesión"
              className="my-5 mx-5 px-10 py-3 bg-indigo-700 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link
              className="'block text-center my-5 text-gray-500"
              to="/">¿Ya tienes una cuenta? Inicisa Sesión.</Link>
            
            <Link
               className="block text-center my-5 text-gray-500"
               to="/olvide-password"> Olvidé mi password</Link>


          </nav>
        </div>


      </>
    )
  };
  
  export default Resgistrar;