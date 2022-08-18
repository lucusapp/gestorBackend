import express from 'express';
import { createFiscal, deleteFiscal, getFiscal, getFiscalById, updateFiscal } from '../controllers/GestorController.js';

const fiscalRouter = express.Router();


fiscalRouter.get('/',getFiscal)
fiscalRouter.get('/:id',getFiscalById)
fiscalRouter.post('/',createFiscal)
fiscalRouter.put('/:id',updateFiscal)
fiscalRouter.delete('/:id',deleteFiscal)

export default fiscalRouter;