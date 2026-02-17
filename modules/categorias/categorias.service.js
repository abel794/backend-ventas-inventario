import categoriaRepo from "./categoria.repository.js";

class CategoriaService {

  async crearCategoria(data) {
    return categoriaRepo.crear(data);
  }

  async listarCategorias() {
    return categoriaRepo.obtenerTodas();
  }

  async obtenerCategoria(id) {
    const categoria = await categoriaRepo.obtenerPorId(id);
    if (!categoria) {
      throw new Error("Categoría no encontrada");
    }
    return categoria;
  }

  async actualizarCategoria(id, data) {
    const categoria = await categoriaRepo.actualizar(id, data);
    if (!categoria) {
      throw new Error("Categoría no encontrada");
    }
    return categoria;
  }

  async eliminarCategoria(id) {
    const categoria = await categoriaRepo.eliminar(id);
    if (!categoria) {
      throw new Error("Categoría no encontrada");
    }
    return categoria;
  }
}

export default new CategoriaService();
