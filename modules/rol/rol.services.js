import roleRepository from "./rol.repository.js";

class RoleService {

  async crearRol(data) {
    const rolExiste = await roleRepository.obtenerPorNombre(data.nombre);

    if (rolExiste) {
      throw new Error("El rol ya existe");
    }

    return roleRepository.crear(data);
  }

  async listarRoles() {
    return roleRepository.obtenerTodos();
  }

  async obtenerRol(id) {
    const rol = await roleRepository.obtenerPorId(id);

    if (!rol) {
      throw new Error("Rol no encontrado");
    }

    return rol;
  }

  async actualizarRol(id, data) {
    const rol = await roleRepository.actualizar(id, data);

    if (!rol) {
      throw new Error("No se pudo actualizar el rol");
    }

    return rol;
  }

  async eliminarRol(id) {
    const rol = await roleRepository.obtenerPorId(id);

    if (!rol) {
      throw new Error("Rol no encontrado");
    }

    return roleRepository.eliminar(id);
  }
}

export default new RoleService();
