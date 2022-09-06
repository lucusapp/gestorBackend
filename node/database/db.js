//conexion a la base de datos
import {Sequelize} from 'sequelize';

const db = new Sequelize('9059881_gestorApp','gavialus','@Romimu1111', {
    host:'PMYSQL154.dns-servicio.com',
    dialect: "mysql"
  
});

export default db;