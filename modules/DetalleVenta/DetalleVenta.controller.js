// controllers/DetalleVentaController.js
import DetalleVentaService from "./DetalleVentaService.js";

class DetalleVentaController {
  async crear(req, res) {
    try {
      const detalle = await DetalleVentaService.crearDetalle(req.body);
      res.status(201).json(detalle);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async listarPorVenta(req, res) {
    try {
      const detalles = await DetalleVentaService.obtenerDetallesDeVenta(
        req.params.ventaId
      );
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }
}

export default new DetalleVentaController();
