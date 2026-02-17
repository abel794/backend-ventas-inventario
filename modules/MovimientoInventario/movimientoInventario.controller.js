import movimientoService from "../services/movimientoInventario.service.js";

class MovimientoInventarioController {

  async crear(req, res) {
    try {
      const movimiento = await movimientoService.registrarMovimiento({
        ...req.body,
        usuarioId: req.user.id // viene del auth middleware
      });
      res.status(201).json(movimiento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async historial(req, res) {
    const historial = await movimientoService.obtenerHistorial(
      req.params.inventarioId
    );
    res.json(historial);
  }
}

export default new MovimientoInventarioController();
