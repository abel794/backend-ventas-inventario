import Categoria from "./categoria.model.js";

class CategoriaRepository {

  crear(data) {
    return Categoria.create(data);
  }

  obtenerTodas() {
    return Categoria.find({ estado: "activa" });
  }

  obtenerPorId(id) {
    return Categoria.findById(id);
  }

  actualizar(id, data) {
    return Categoria.findByIdAndUpdate(id, data, { new: true });
  }

  eliminar(id) {
    return Categoria.findByIdAndUpdate(
      id,
      { estado: "inactiva" },
      { new: true }
    );
  }
}

export default new CategoriaRepository();
