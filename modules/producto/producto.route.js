import { Router } from "express";
import productoController from "./producto.controller.js";

const router = Router();

router.post("/", productoController.crear);
router.get("/", productoController.listar);
router.get("/:id", productoController.obtener);
router.put("/:id", productoController.actualizar);
router.delete("/:id", productoController.eliminar);

export default router;
