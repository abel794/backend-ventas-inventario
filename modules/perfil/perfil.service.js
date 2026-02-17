import usuarioRepo from "./usuario.repository.js";

class UsuarioService {

  async crearUsuario(data) {
    const existe = await usuarioRepo.obtenerPorCorreo(data.correo);
    if (existe) {
      throw new Error("El correo ya está registrado");
    }
    return usuarioRepo.crear(data);
  }

  async obtenerUsuario(id) {
    const usuario = await usuarioRepo.obtenerPorId(id);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }

  async actualizarUsuario(id, data) {
    const usuario = await usuarioRepo.actualizar(id, data);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }

  async eliminarUsuario(id) {
    const usuario = await usuarioRepo.eliminar(id);
    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }
}

export default new UsuarioService();
