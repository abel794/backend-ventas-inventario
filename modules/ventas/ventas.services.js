import ventaRepo from "./venta.repository.js";
import detalleVentaRepo from "../repositories/detalleVenta.repository.js";
import inventarioRepo from "../repositories/inventario.repository.js";
import movimientoService from "./movimientoInventario.service.js";

class VentaService {

  async crearVenta({ productos, usuarioId }) {
    let total = 0;

    // 1️⃣ crear venta vacía
    const venta = await ventaRepo.crear({
      usuario: usuarioId,
      total: 0
    });

    // 2️⃣ procesar productos
    for (const item of productos) {
      const inventario = await inventarioRepo.obtenerPorProducto(
        item.productoId
      );

      if (!inventario || inventario.cantidadActual < item.cantidad) {
        throw new Error("Stock insuficiente");
      }

      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      // 3️⃣ registrar detalle
      await detalleVentaRepo.crear({
        venta: venta._id,
        producto: item.productoId,
        cantidad: item.cantidad,
        precioUnitario: item.precio,
        subtotal
      });

      // 4️⃣ movimiento de inventario
      await movimientoService.registrarMovimiento({
        inventarioId: inventario._id,
        tipo: "salida",
        cantidad: item.cantidad,
        motivo: "Venta",
        usuarioId
      });
    }

    // 5️⃣ actualizar total
    venta.total = total;
    await venta.save();

    return venta;
  }
}

export default new VentaService();
