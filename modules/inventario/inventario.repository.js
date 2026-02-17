import Inventario from "./inventario.model.js";

class InventarioRepository {

  crear(data) {
    return Inventario.create(data);
  }

  obtenerPorProducto(productoId) {
    return Inventario.findOne({ producto: productoId })
      .populate("producto");
  }

  obtenerTodos() {
    return Inventario.find({ estado: "activo" })
      .populate("producto");
  }

  actualizarCantidad(id, nuevaCantidad) {
    return Inventario.findByIdAndUpdate(
      id,
      { cantidadActual: nuevaCantidad },
      { new: true }
    );
  }
}

export default new InventarioRepository();
