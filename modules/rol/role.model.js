// modules/rol/rol.model.js
import mongoose from "mongoose";

const RolSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    permisos: {
      type: [String],
      required: true,
      default: []
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

const Rol = mongoose.model("Rol", RolSchema);

export default Rol;
