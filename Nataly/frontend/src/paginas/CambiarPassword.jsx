import { useState } from "react"
import { useEffect } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import Alerta from "../components/Alerta"

const CambiarPassword = () => {
  const { guardarPassword } = useAuth()

  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    pwd_actual: '',
    pwd_nuevo: ''
  })
  

  const handleSubmit = async e =>{
    e.preventDefault()
    if( Object.values(password).some(campo => campo === '')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if (password.pwd_nuevo.length < 6 ) {
      setAlerta({
        msg: 'La contraseña debe tener mínimo 6 caracteres',
        error: true
    })
    return
  }
  const respuesta = await guardarPassword(password)
  setAlerta(respuesta)
}

  const { msg } = alerta

  return (
    <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10">Cambiar Contraseña</h2>
        <p className="text-indigo-600 font-bold text-center">Modifica tu{' '}
        <span className="text-indigo-600 font-bold">Contraseña aquí</span> </p>


        <section className="flex justify-center my-2">
        <div className="w-9/12 md:wd-1/2 bg-white shadow rounded-lg p-5">

        {msg && <Alerta alerta={alerta} />}
          <form className="mx-4 px-4"
          onSubmit={handleSubmit}>

            <div className="my-4">
              <label className="uppercase font-bold text-gray-600" htmlFor="">Contraseña Actual
              </label>
              <input type="password" 
              className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
              name="pwd_actual"
              placeholder="Escribe tu contraseña actual"
              onChange={e => setPassword({
                ...password,
                [e.target.name] : e.target.value
              })}
               />
            </div>

            <div className="my-4">
              <label className="uppercase font-bold text-gray-600" htmlFor="">Nueva Contraseña
              </label>
              <input type="password" 
              className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
              name="pwd_nuevo"
              placeholder="Escribe tu nueva contraseña"
              onChange={e => setPassword({
                ...password,
                [e.target.name] : e.target.value
              })}
              
               />
            </div>

            <input type="submit"
            value="Actualizar Contraseña"
            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
            ></input>

          </form>

        </div>
      </section>
    </>

  )
}

export default CambiarPassword