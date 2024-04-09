
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

const registrar = (req, res) => {
   console.log(req.body)
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
