import { Router } from 'express';
import livroController from '../controllers/Livros.js';

const router = new Router();

router.get("/test", livroController.testConnection);
router.get("/", livroController.index);

export default router;