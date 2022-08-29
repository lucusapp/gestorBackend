import LegisModel from "../database/models/LegisModel.js";


//Definimos lo métodos para el CRUD
//Mostrar todos los registros
export async function getLegis(req, res){
    try{
        const Todolegis = await LegisModel.findAll();
        res.json(Todolegis);
    } catch(e){
        res.json({message:e.message});
    }
}

//Mostrar un registro
export async function getLegisById(req, res){
    try{
        const legis = await LegisModel.findByPk(req.params.id);
        res.json(legis)
    } catch(e){
        res.json({message:e.message});
    }
} 

//Crear un registro
export async function createLegis(req, res){
    try{
        const {articulo, contenido} = req.body;
        const legis = await LegisModel.create({
            articulo,
            contenido
        });
        res.json(legis);
    } catch(e){
        res.json({message:e.message});
    }
}

//Actualizar un registro
export async function updateLegis(req, res){
    try{
        const {title, contenido} = req.body;
        const legis = await LegisModel.update({
            title,
            contenido
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.json(legis);
    } catch(e){
        res.json({message:e.message});
    }
}

//Eliminar un registro
export async function deleteLegis(req, res){
    try{
        const legis = await LegisModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(legis);
    } catch(e){
        res.json({message:e.message});
    }
}