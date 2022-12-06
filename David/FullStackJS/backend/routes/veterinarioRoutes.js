import express from "express";
const router = express.Router();
import { 
    registrar,
    perfil,
    confirmar,
    autenticar
} from "../controllers/veterinarioController.js"; //exportar las funciones de VeterinarioRoutes.js

router.post("/", registrar);
router.get("/perfil", perfil);
router.get("/confirmar/:token", confirmar); //routing con parametro dínamico.
router.post("/login", autenticar); //routing para la autenticación del veterinario.

export default router;
