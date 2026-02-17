import mongoose from "mongoose";

const CategoriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    descripcion: {
      type: String,
      trim: true
    },

    estado: {
      type: String,
      enum: ["activa", "inactiva"],
      default: "activa"
    }
  },
  {
    timestamps: true
  }
);

const Categoria = mongoose.model("Categoria", CategoriaSchema);
export default Categoria;
