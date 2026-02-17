import Usuario from "./usuario.model.js";

class UsuarioRepository {

  crear(data) {
    return Usuario.create(data);
  }

  obtenerPorCorreo(correo) {
    return Usuario.findOne({ correo }).populate("rol");
  }

  obtenerPorId(id) {
    return Usuario.findById(id).populate("rol");
  }

  actualizar(id, data) {
    return Usuario.findByIdAndUpdate(id, data, { new: true });
  }

  eliminar(id) {
    return Usuario.findByIdAndDelete(id);
  }
}

export default new UsuarioRepository();
