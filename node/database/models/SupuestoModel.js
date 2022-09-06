import db from '../db.js';

import{DataTypes} from 'sequelize';


const SupuestoModel = db.define('supuestos',{
    enunciado:{type:DataTypes.STRING},
    resolucion:{type:DataTypes.STRING},
})

export default SupuestoModel;