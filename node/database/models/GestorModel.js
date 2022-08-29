//importamos la conexion a la base de datos

import db from '../db.js';

import{DataTypes} from 'sequelize';

const FiscalModeL = db.define('fiscal',{
    title:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
})

export default FiscalModeL;
