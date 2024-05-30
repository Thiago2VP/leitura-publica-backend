import { Router } from 'express';
import livroController from '../controllers/Livros.js';

const router = new Router();

router.get("/dbs", livroController.getDBs);

export default router;