import productoService from "./producto.service.js";

class ProductoController {

  async crear(req, res) {
    try {
      const producto = await productoService.crearProducto(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req, res) {
    const productos = await productoService.listarProductos();
    res.json(productos);
  }

  async obtener(req, res) {
    try {
      const producto = await productoService.obtenerProducto(req.params.id);
      res.json(producto);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const producto = await productoService.actualizarProducto(
        req.params.id,
        req.body
      );
      res.json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      await productoService.eliminarProducto(req.params.id);
      res.json({ message: "Producto desactivado" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new ProductoController();
