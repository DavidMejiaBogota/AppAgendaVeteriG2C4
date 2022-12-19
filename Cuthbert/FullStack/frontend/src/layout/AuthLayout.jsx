import{Outlet} from "react-router-dom"
const AuthLayout = () =>{
    return(
        <>
        <h1>Administrar de pacientes de veterinario</h1>
        <Outlet/>
        </>
    ) 
};
export default AuthLayout;
