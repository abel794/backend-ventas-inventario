import { Router } from "express";
import { crear,obtener, actualizar } from "./usuario.controller.js";

const router = Router();

router.post("/", crear);
router.get("/", obtener);
router.put("/:id", actualizar);

export default router;