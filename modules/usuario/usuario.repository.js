import Usuario from "./usuarios.model.js"


export const obtenerusuario= () =>
  Usuario.find()

export const obtenerPorId = (id) =>
  Usuario.findById(id)

export const crearUsuario = (data) =>
  Usuario.create(data)

export const actualizarUsuario = (id, data) =>
  Usuario.findByIdAndUpdate(id, data, { new: true })

export const eliminarUsuario = (id) =>
  Usuario.findByIdAndDelete(id)