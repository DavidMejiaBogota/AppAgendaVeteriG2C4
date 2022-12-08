
const Login = () => {
  return (
    <>
      <iv>
        <h1 className="text-indigo-600 font-black text-7xl text-center">
          Inicia Sesión, Administra tus <span className="text-black ">Pacientes</span>
        </h1>
      </iv>
      <iv>
        <form>
          <div className="my-5 ">
            <label
              className="uppercase text-gray-600 block text-xl font-bold" //uppercase para que el texto se vea en mayúsculas; 
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5 ">
            <label
              className="uppercase text-gray-600 block text-xl font-bold" //uppercase para que el texto se vea en mayúsculas; 
            >
              Password
            </label>
            <input
              type="Email"
              placeholder="TU Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="px-10 py-3 bg-indigo-700 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800"
          />
        </form>
      </iv>
   
    </>
  );
};

export default Login;