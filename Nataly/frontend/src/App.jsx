import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Login from "./paginas/Login";
import OlvidePassword from "./paginas/OlvidePassword";
import Registrar from "./paginas/Registrar";

function App() {
 console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path="registrar" element={<Registrar/>}/>
            <Route path="olvide-password" element={<OlvidePassword/>}/>
            <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App
