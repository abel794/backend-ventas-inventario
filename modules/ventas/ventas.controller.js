import ventaService from "./venta.service.js";

class VentaController {

  async crear(req, res) {
    try {
      const venta = await ventaService.crearVenta({
        productos: req.body.productos,
        usuarioId: req.user.id
      });

      res.status(201).json(venta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req, res) {
    const ventas = await ventaService.listar();
    res.json(ventas);
  }
}

export default new VentaController();
