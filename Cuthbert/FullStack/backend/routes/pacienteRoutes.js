import express from "express";
const router = express.Router();
import {
    agregarPaciente,
    obtenerPacientes
} from "../controllers/pacienteControllers.js";

router.route('/').post(agregarPaciente).get(obtenerPacientes);

export default router;
