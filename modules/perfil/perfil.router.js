import { Router } from "express";
import usuarioController from "./usuario.controller.js";

const router = Router();

router.post("/", usuarioController.crear);
router.get("/:id", usuarioController.obtener);
router.put("/:id", usuarioController.actualizar);
router.delete("/:id", usuarioController.eliminar);

export default router;
