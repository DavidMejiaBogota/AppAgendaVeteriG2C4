
export const Paciente = ({paciente}) => {
  const {email, fecha, nombre, propietario, sintomas, _id} = paciente

  

  const formatearFecha =(fecha) => {//api para formatear la fecha al idioma deseado.
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-CO', {dateStyle: 'long'}).format(nuevaFecha)
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-indigo-700 y-2">Nombre: {''}
            <span className="font-normal normal-case text-black">{nombre}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 y-2">Propietario: {''}
            <span className="font-normal normal-case text-black">{propietario}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 y-2">Email Contacto: {''}
            <span className="font-normal normal-case text-black">{email}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Fecha de Alta: {''}
            <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Síntomas: {''}
            <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>

        <div className="flex justify-between my-5">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-lg "
          >Editar</button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-lg "
          >Editar</button>
        </div>
    </div>
  );
};

export default Paciente;