import { Router } from "express";
import categoriaController from "./categoria.controller.js";

const router = Router();

router.post("/", categoriaController.crear);
router.get("/", categoriaController.listar);
router.get("/:id", categoriaController.obtener);
router.put("/:id", categoriaController.actualizar);
router.delete("/:id", categoriaController.eliminar);

export default router;
