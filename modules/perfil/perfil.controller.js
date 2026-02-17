import usuarioService from "./usuario.service.js";

class UsuarioController {

  async crear(req, res) {
    try {
      const usuario = await usuarioService.crearUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async obtener(req, res) {
    try {
      const usuario = await usuarioService.obtenerUsuario(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const usuario = await usuarioService.actualizarUsuario(
        req.params.id,
        req.body
      );
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      await usuarioService.eliminarUsuario(req.params.id);
      res.json({ message: "Usuario eliminado" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new UsuarioController();
