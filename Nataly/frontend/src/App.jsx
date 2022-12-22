import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Login from "./paginas/Login";
import NuevoPassword from "./paginas/NuevoPassword";
import OlvidePassword from "./paginas/OlvidePassword";
import Registrar from "./paginas/Registrar";

import { AuthProvider } from "./context/AuthProvider";

import { AdministrarPacientes } from "./paginas/AdministrarPacientes";

function App() {
 //console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path="registrar" element={<Registrar/>}/>
            <Route path="olvide-password" element={<OlvidePassword/>}/>
            <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
            <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>

          <Route path="/admin" element={<RutaProtegida/>}>
            <Route index element={<AdministrarPacientes/>} />

          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
