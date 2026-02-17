// modules/usuario/usuario.model.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UsuarioSchema = new mongoose.Schema(
  {
    correo: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    contrasena: {
      type: String,
      required: true,
      minlength: 8,
      select: false // 🔥 seguridad real
    },

    rol: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rol",
      required: true
    },

    estado: {
      type: String,
      enum: ["activo", "inactivo", "bloqueado"],
      default: "activo"
    }
  },
  {
    timestamps: true
  }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario