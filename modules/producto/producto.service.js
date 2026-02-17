import productoRepo from "./producto.repository.js";

class ProductoService {

  async crearProducto(data) {
    return productoRepo.crear(data);
  }

  async listarProductos() {
    return productoRepo.obtenerTodos();
  }

  async obtenerProducto(id) {
    const producto = await productoRepo.obtenerPorId(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return producto;
  }

  async actualizarProducto(id, data) {
    const producto = await productoRepo.actualizar(id, data);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return producto;
  }

  async eliminarProducto(id) {
    const producto = await productoRepo.eliminar(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return producto;
  }
}

export default new ProductoService();
