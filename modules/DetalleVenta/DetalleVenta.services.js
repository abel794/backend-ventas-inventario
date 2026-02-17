// services/DetalleVentaService.js
import DetalleVentaRepository from "./DetalleVentaRepository.js";

class DetalleVentaService {
  async crearDetalle({ venta, producto, cantidad, precioUnitario }) {
    const subtotal = cantidad * precioUnitario;

    return DetalleVentaRepository.crear({
      venta,
      producto,
      cantidad,
      precioUnitario,
      subtotal
    });
  }

  obtenerDetallesDeVenta(ventaId) {
    return DetalleVentaRepository.buscarPorVenta(ventaId);
  }
}

export default new DetalleVentaService();
