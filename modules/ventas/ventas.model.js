import mongoose from "mongoose";

const VentaSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
    },

    total: {
      type: Number,
      required: true,
      min: 0
    },

    estado: {
      type: String,
      enum: ["completada", "cancelada"],
      default: "completada"
    }
  },
  {
    timestamps: true
  }
);

const Venta = mongoose.model("Venta", VentaSchema);
export default Venta;
