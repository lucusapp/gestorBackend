//importamos el modelo
import FiscalModeL from "../database/models/GestorModel.js";


//Definimos lo métodos para el CRUD
//Mostrar todos los registros
export async function getFiscal(req, res){
    try{
        const Todofiscal = await FiscalModeL.findAll({
            include:{
                association: "legislacion",
                attributes: ['articulo']

            }
        });
        res.json(Todofiscal);
    } catch(e){
        res.json({message:e.message});
    }
}

//Mostrar un registro
export async function getFiscalById(req, res){
    try{
        const fiscal = await FiscalModeL.findByPk(req.params.id);
        res.json(fiscal)
    } catch(e){
        res.json({message:e.message});
    }
} 

//Crear un registro
export async function createFiscal(req, res){
    try{
        const {title, contenido} = req.body;
        const fiscal = await FiscalModeL.create({
            title, 
            contenido
        });
        res.json(fiscal);
    } catch(e){
        res.json({message:e.message});
    }
}

//Actualizar un registro
export async function updateFiscal(req, res){
    try{
        const {title, contenido} = req.body;
        const fiscal = await FiscalModeL.update({
            title,
            contenido
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.json(fiscal);
    } catch(e){
        res.json({message:e.message});
    }
}

//Eliminar un registro
export async function deleteFiscal(req, res){
    try{
        const fiscal = await FiscalModeL.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(fiscal);
    } catch(e){
        res.json({message:e.message});
    }
}

