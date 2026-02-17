import MovimientoInventario from "../models/movimientoInventario.model.js";

class MovimientoInventarioRepository {

  crear(data) {
    return MovimientoInventario.create(data);
  }

  obtenerPorInventario(inventarioId) {
    return MovimientoInventario.find({ inventario: inventarioId })
      .populate("usuario")
      .sort({ createdAt: -1 });
  }
}

export default new MovimientoInventarioRepository();
