import express from 'express';
import { createLegis, deleteLegis, getLegis, getLegisById, updateLegis } from '../controllers/LegisController.js';

const legisRouter = express.Router();

legisRouter.get('/',getLegis)
legisRouter.get('/:id',getLegisById)
legisRouter.post('/',createLegis)
legisRouter.put('/:id',updateLegis)
legisRouter.delete('/:id',deleteLegis)

export default legisRouter;