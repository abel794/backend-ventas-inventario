import mongoose from "mongoose";

const PerfilSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
      unique: true
    },

    nombres: {
      type: String,
      required: true,
      trim: true
    },

    apellidos: {
      type: String,
      required: true,
      trim: true
    },

    telefono: {
      type: String,
      trim: true
    },

    direccion: {
      type: String,
      trim: true
    },

    documento: {
      tipo: {
        type: String,
        enum: ["CC", "TI", "PASAPORTE"]
      },
      numero: {
        type: String,
        unique: true,
        sparse: true
      }
    },

    fechaNacimiento: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Perfil = mongoose.model("Perfil", PerfilSchema);
export default Perfil;
