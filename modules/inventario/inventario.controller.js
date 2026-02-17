import inventarioService from "./inventario.service.js";

class InventarioController {

  async crear(req, res) {
    try {
      const inventario = await inventarioService.crearInventario(
        req.body.productoId
      );
      res.status(201).json(inventario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req, res) {
    const inventarios = await inventarioService.listarInventarios();
    res.json(inventarios);
  }

  async obtenerPorProducto(req, res) {
    try {
      const inventario = await inventarioService.obtenerInventarioPorProducto(
        req.params.productoId
      );
      res.json(inventario);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new InventarioController();
