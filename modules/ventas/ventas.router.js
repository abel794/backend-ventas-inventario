import { Router } from "express";
import ventaController from "./venta.controller.js";

const router = Router();

router.post("/", ventaController.crear);
router.get("/", ventaController.listar);

export default router;
