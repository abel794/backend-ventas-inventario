import mongoose from "mongoose";

const MovimientoInventarioSchema = new mongoose.Schema(
  {
    inventario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventario",
      required: true
    },

    tipo: {
      type: String,
      enum: ["entrada", "salida", "ajuste"],
      required: true
    },

    cantidad: {
      type: Number,
      required: true,
      min: 1
    },

    motivo: {
      type: String,
      trim: true
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const MovimientoInventario = mongoose.model(
  "MovimientoInventario",
  MovimientoInventarioSchema
);

export default MovimientoInventario;
