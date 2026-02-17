// repositories/DetalleVentaRepository.js
import DetalleVenta from "./DetalleVenta.js";

class DetalleVentaRepository {
  crear(data) {
    return DetalleVenta.create(data);
  }

  buscarPorVenta(ventaId) {
    return DetalleVenta.find({ venta: ventaId })
      .populate("producto");
  }
}

export default new DetalleVentaRepository();
