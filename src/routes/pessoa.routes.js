
import {Router} from 'express';
import * as controller from '../controllers/pessoa.controller.js';
import idadeMiddleware from '../middlewares/idade.middleware.js';

const router = Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscar);
router.post('/', idadeMiddleware, controller.criar);
router.put('/:id', idadeMiddleware, controller.atualizar);
router.delete('/:id', controller.excluir);

export default router;
