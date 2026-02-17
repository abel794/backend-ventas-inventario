import roleService from "./rol.services.js";

class RoleController {

  async crear(req, res) {
    try {
      const rol = await roleService.crearRol(req.body);
      res.status(201).json(rol);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req, res) {
    try {
      const roles = await roleService.listarRoles();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async obtener(req, res) {
    try {
      const rol = await roleService.obtenerRol(req.params.id);
      res.json(rol);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const rol = await roleService.actualizarRol(req.params.id, req.body);
      res.json(rol);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      await roleService.eliminarRol(req.params.id);
      res.json({ message: "Rol eliminado" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new RoleController();
