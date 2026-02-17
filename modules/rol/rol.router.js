import { Router } from "express";
import roleController from "./rol.controller.js";

const router = Router();

router.post("/", roleController.crear);
router.get("/", roleController.listar);
router.get("/:id", roleController.obtener);
router.put("/:id", roleController.actualizar);
router.delete("/:id", roleController.eliminar);

export default router;
