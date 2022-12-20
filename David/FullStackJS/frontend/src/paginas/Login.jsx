import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alerta from '../components/Alerta';
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/Axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const {setAuth} = useAuth();

  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if([email, password].includes('')) {
      setAlerta({
        msg : 'Todos los campos son oblitatorios',
        error: true
      });
      return
    }

    try {
        const {data} = await clienteAxios.post('/veterinarios/login', {email, password});
        localStorage.setItem('token', data.token)
        setAuth(data)
        navigate('/admin')
    } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
    }

  }
  const {msg} = alerta;
  return (
    <>
      <div className="items-center">
        <h1 className="text-indigo-600 font-black text-6xl text-center it">
          Inicia Sesión, Administra tus <span className="text-black ">Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg items-center rounded-xl bg-white">
        {msg &&
          <Alerta 
            alerta={alerta}
          />
        }
        <form onSubmit={handleSubmit}>
          <div className="my-5 mx-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold" //uppercase para que el texto se vea en mayúsculas; 
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5 mx-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold" //uppercase para que el texto se vea en mayúsculas; 
            >
              Password
            </label>
            <input
              type="password"
              placeholder="TU Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="my-5 mx-5 px-10 py-3 bg-indigo-700 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between text-gray-500 mx-5">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar">¿No tienes una cuenta? ¡¡Registrate!!</Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password">Olvidé mi password</Link>
        </nav>
      </div>
    </>
  );
};

export default Login;