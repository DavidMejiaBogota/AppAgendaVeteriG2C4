import AdminNav from "../components/AdminNav";

const EditarPerfil = () => {
    return (
      <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center my-5">Editar Perfil</h2>
        <p className="text-xl my-5 text-center ">Modifica tu {''}
            <span className='text-indigo-600 font-bold '>Información aquí</span>
        </p>
      </>
    );
  };
  
  export default EditarPerfil;