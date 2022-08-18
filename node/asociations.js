import LegisModel from "./models/GestorModel.js";

import FiscalModeL from "./models/GestorModel.js";
//añadir una clave foranea a la tabla FiscalModel
FiscalModeL.hasMany(LegisModel,{foreingKey:"titulo_id"})


//añade una clave
LegisModel.belongsTo(FiscalModeL,{foreingKey:"titulo"})