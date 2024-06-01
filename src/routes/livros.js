import { Router } from "express";
import livroController from "../controllers/Livros.js";

const router = new Router();

router.get("/test", livroController.testConnection);
router.get("/", livroController.index);
router.post("/", livroController.insert);
router.put("/:name", livroController.update);
router.delete("/:name", livroController.delete);

export default router;
