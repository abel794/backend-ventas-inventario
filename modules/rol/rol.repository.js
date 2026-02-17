import Rol from "./role.model.js";

class RoleRepository {

  crear(data) {
    return Rol.create(data);
  }

  obtenerTodos() {
    return Rol.find();
  }

  obtenerPorId(id) {
    return Rol.findById(id);
  }

  obtenerPorNombre(nombre) {
    return Rol.findOne({ nombre });
  }

  actualizar(id, data) {
    return Rol.findByIdAndUpdate(id, data, { new: true });
  }

  eliminar(id) {
    return Rol.findByIdAndDelete(id);
  }
}

export default new RoleRepository();
