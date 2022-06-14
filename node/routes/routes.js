import express from 'express';
import { createFiscal, deleteFiscal, getFiscal, getFiscalById, updateFiscal } from '../controllers/GestorController.js';

const router = express.Router();

router.get('/',getFiscal)
router.get('/:id',getFiscalById)
router.post('/',createFiscal)
router.put('/:id',updateFiscal)
router.delete('/:id',deleteFiscal)

export default router;
