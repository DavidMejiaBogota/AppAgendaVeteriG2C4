import express from "express";
const router = express.Router();
import { 
    registrar,
    perfil,
    confirmar,
    autenticar
} from "../controllers/veterinarioController.js"; //exportar las funciones de VeterinarioRoutes.js
import checkAuth from "../middleware/authMiddleware.js";

router.post("/", registrar);//routing para registar el veterinario.
router.get("/confirmar/:token", confirmar); //routing para confimrar el veterinario con parametro dínamico.
router.post("/login", autenticar); //routing para la autenticación del veterinario.

router.get("/perfil", checkAuth, perfil);

export default router;
