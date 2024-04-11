import {check, validationResult} from "express-validator";
import Usuario from "../models/Usuario.js"

const formularioLogin = (req, res) => {
    res.render('auth/login',{
        pagina : 'Iniciar Sesion'
    }) //renderiza, muestra una vista, views/auth/login.pug
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    })
}

//inyeccion de ORM a la base de datos
const registrar = async(req, res) => {
    //console.log(req.body)

    //validacion
    await check('nombre').notEmpty().withMessage("El nombre no puede ir vacio").run(req)
    await check('email').isEmail().withMessage("Eso no es un email ").run(req)
    await check('password').isLength({min: 6}).withMessage("El password debe ser de al menos 6 caracteres").run(req)
    await check('repetir-password').equals('password').withMessage("El password debe ser de al menos 6 caracteres").run(req)

    let resultado = validationResult(req)

    // return res.json(resultado.array())

    //Vericar que el resultado este vacio
    if(!resultado.isEmpty()) {
        //errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array()
        })
    }

    const usuario = await Usuario.create(req.body); //creando registro
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password',{
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}
export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}
