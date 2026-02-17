import Producto from "./producto.model.js";

class ProductoRepository {

  crear(data) {
    return Producto.create(data);
  }

  obtenerTodos() {
    return Producto.find({ estado: "activo" }).populate("categoria");
  }

  obtenerPorId(id) {
    return Producto.findById(id).populate("categoria");
  }

  actualizar(id, data) {
    return Producto.findByIdAndUpdate(id, data, { new: true });
  }

  eliminar(id) {
    return Producto.findByIdAndUpdate(
      id,
      { estado: "inactivo" },
      { new: true }
    );
  }
}

export default new ProductoRepository();
