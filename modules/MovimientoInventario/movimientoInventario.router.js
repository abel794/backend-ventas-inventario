import { Router } from "express";
import movimientoController from "../controllers/movimientoInventario.controller.js";

const router = Router();

router.post("/", movimientoController.crear);
router.get(
  "/inventario/:inventarioId",
  movimientoController.historial
);

export default router;
