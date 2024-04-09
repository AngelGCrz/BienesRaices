// const express = require('express') //commonJS
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
//crear la app
const app = express()

//Habilitar lectura de datos de forumlarios
app.use(express.urlencoded({ extended: true }))

//Conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexion Correcta a la base de datos')
} catch (error) {
    console.log(error)
}

//Habilitar Pug 
app.set('view engine', 'pug') //que tipo de engine se va a usar "pug"
app.set('views', './views')  //busca en la carpeta views

//Carpeta publica
app.use(express.static('public'))


//Routing
app.use('/auth', usuarioRoutes) //'use' busca todas las que inicien con /

//
//Definir un puerto y arrancar el proyecto
const port = 3000

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})
