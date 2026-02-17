import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },

    descripcion: {
      type: String,
      trim: true
    },

    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categoria",
      required: true
    },

    precioBase: {
      type: Number,
      required: true,
      min: 0
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

const Producto = mongoose.model("Producto", ProductoSchema);
export default Producto;
