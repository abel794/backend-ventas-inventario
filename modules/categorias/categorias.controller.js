import categoriaService from "./categoria.service.js";

class CategoriaController {

  async crear(req, res) {
    try {
      const categoria = await categoriaService.crearCategoria(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req, res) {
    const categorias = await categoriaService.listarCategorias();
    res.json(categorias);
  }

  async obtener(req, res) {
    try {
      const categoria = await categoriaService.obtenerCategoria(req.params.id);
      res.json(categoria);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const categoria = await categoriaService.actualizarCategoria(
        req.params.id,
        req.body
      );
      res.json(categoria);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      await categoriaService.eliminarCategoria(req.params.id);
      res.json({ message: "Categoría desactivada" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new CategoriaController();
