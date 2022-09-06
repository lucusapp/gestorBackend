import FiscalModeL from "./models/GestorModel.js";
import LegisModel from "./models/LegisModel.js";
import SupuestoModel from "./models/SupuestoModel.js"
//crea una nueva tabla en la base de datos
FiscalModeL.belongsToMany(SupuestoModel,{through:"fiscal_legis"})
FiscalModeL.hasOne(LegisModel)


//añade una clave
LegisModel.belongsTo(FiscalModeL)
SupuestoModel.belongsToMany(FiscalModeL,{through:"fiscal_legis"})

