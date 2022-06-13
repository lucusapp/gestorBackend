//conexion a la base de datos
import {Sequelize} from 'sequelize';

const db = new Sequelize('gestorapp','root','', {
    host:'localhost',
    dialect:'mysql',
  
});

export default db;