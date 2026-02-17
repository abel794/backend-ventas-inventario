// routes/detalleVentaRoutes.js
import { Router } from "express";
import DetalleVentaController from "./DetalleVentaController.js";

const router = Router();

router.post("/", DetalleVentaController.crear);
router.get("/venta/:ventaId", DetalleVentaController.listarPorVenta);

export default router;
