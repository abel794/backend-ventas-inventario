import inventarioRepo from "./inventario.repository.js";

class InventarioService {

  async crearInventario(productoId) {
    const existe = await inventarioRepo.obtenerPorProducto(productoId);
    if (existe) {
      throw new Error("El inventario ya existe para este producto");
    }

    return inventarioRepo.crear({
      producto: productoId,
      cantidadActual: 0
    });
  }

  async obtenerInventarioPorProducto(productoId) {
    const inventario = await inventarioRepo.obtenerPorProducto(productoId);
    if (!inventario) {
      throw new Error("Inventario no encontrado");
    }
    return inventario;
  }

  async listarInventarios() {
    return inventarioRepo.obtenerTodos();
  }
}

export default new InventarioService();
