import usePacientes from '../hooks/usePacientes'



 const Paciente = ({paciente}) => {
  
  const {setEdicion, eliminarPaciente} =usePacientes()

  const { email, fecha, nombre, propietario, sintomas, _id } = paciente

  const formatearFecha =(fecha) =>{
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md py-10 rounded">
      <p className="font-bold mx-5 text-indigo-800">Nombre:{' '}
        <span className="font-normal normal-case text-black">
          {nombre}
        </span>
      </p>

      <p className="font-bold mx-5 text-indigo-800">Propietario:{' '}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>

      <p className="font-bold mx-5 text-indigo-800">Email:{' '}
        <span className="font-normal normal-case text-black">
          {email}
        </span>
      </p>

      <p className="font-bold mx-5 text-indigo-800">Fecha de alta:{' '}
        <span className="font-normal normal-case text-black">
          {formatearFecha(fecha)}
        </span>
      </p>

      <p className="font-bold mx-5 text-indigo-800">Síntomas:{' '}
        <span className="font-normal normal-case text-black">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-around my-5">
        <button
        type="button"
        className="py-2 px-10 mx-5 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-md"
        onClick={() => setEdicion(paciente)}>
          Editar
        </button>

<div></div>
        <button
        type="button"
        className="py-2 px-10 mx-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-md"
        onClick={() => eliminarPaciente(_id)}>
          Eliminar
        </button>

      </div>

    </div>
  )
}
export default Paciente
