import mongoose from "mongoose";

const InventarioSchema = new mongoose.Schema(
  {
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
      required: true,
      unique: true // 🔥 un inventario por producto
    },

    cantidadActual: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },

    ubicacion: {
      type: String,
      trim: true
    },

    estado: {
      type: String,
      enum: ["activo", "inactivo"],
      default: "activo"
    }
  },
  {
    timestamps: true
  }
);

const Inventario = mongoose.model("Inventario", InventarioSchema);
export default Inventario;
