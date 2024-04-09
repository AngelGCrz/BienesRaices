import { DataTypes } from 'sequelize'
import db from '../config/db.js'
const Usuario = db.define('usuario', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false, //este campo no puede ir vacio
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default Usuario