import movimientoRepo from "./movimientoInventario.repository.js";
import inventarioRepo from "../inventario/inventario.repository.js";

class MovimientoInventarioService {

  async registrarMovimiento({
    inventarioId,
    tipo,
    cantidad,
    motivo,
    usuarioId
  }) {
    const inventario = await inventarioRepo.obtenerPorProducto(inventarioId);
    if (!inventario) {
      throw new Error("Inventario no encontrado");
    }

    let nuevaCantidad = inventario.cantidadActual;

    if (tipo === "entrada") {
      nuevaCantidad += cantidad;
    }

    if (tipo === "salida") {
      if (inventario.cantidadActual < cantidad) {
        throw new Error("Stock insuficiente");
      }
      nuevaCantidad -= cantidad;
    }

    if (tipo === "ajuste") {
      nuevaCantidad = cantidad;
    }

    // 1️⃣ actualizar inventario
    await inventarioRepo.actualizarCantidad(
      inventario._id,
      nuevaCantidad
    );

    // 2️⃣ registrar movimiento
    return movimientoRepo.crear({
      inventario: inventario._id,
      tipo,
      cantidad,
      motivo,
      usuario: usuarioId
    });
  }

  async obtenerHistorial(inventarioId) {
    return movimientoRepo.obtenerPorInventario(inventarioId);
  }
}

export default new MovimientoInventarioService();
