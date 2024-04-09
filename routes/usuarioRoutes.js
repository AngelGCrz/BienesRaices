import  express  from "express";
import { formularioLogin, formularioRegistro, registrar,formularioOlvidePassword } from "../controllers/usuarioController.js";


const router = express.Router()

//!Routing
router.get('/login', formularioLogin); // ENDPOINT login

router.get('/registro', formularioRegistro); // ENDPOINT registro
router.post('/registro', registrar)
router.get('/olvide-password', formularioOlvidePassword)

export default router