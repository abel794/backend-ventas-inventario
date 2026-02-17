import { Router } from "express";
import inventarioController from "./inventario.controller.js";

const router = Router();

router.post("/", inventarioController.crear);
router.get("/", inventarioController.listar);
router.get("/producto/:productoId", inventarioController.obtenerPorProducto);

export default router;
