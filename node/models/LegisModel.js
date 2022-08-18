import db from '../database/db.js';

import{DataTypes} from 'sequelize';


const LegisModel = db.define('legislacion',{
    articulo:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
    impuesto:{type:DataTypes.STRING}
})

export default LegisModel;