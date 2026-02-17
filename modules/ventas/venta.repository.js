import Venta from "./venta.model.js";

class VentaRepository {

  crear(data) {
    return Venta.create(data);
  }

  obtenerPorId(id) {
    return Venta.findById(id).populate("usuario");
  }

  listar() {
    return Venta.find()
      .populate("usuario")
      .sort({ createdAt: -1 });
  }
}

export default new VentaRepository();
