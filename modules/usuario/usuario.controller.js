import { crearUsuario, obtenerUsuario, actualizarUsuario } from './usuario.services.js'

export const crear = async (req, res) => {
  try {
    const usuario = await crearUsuario(req.body)
    res.status(201).json(usuario)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const obtener = async (req, res) => {
    try {
        const usuario = await obtenerUsuario()
        res.status(200).json({
            message:"Usuario encontrado",
            data: usuario
        })
    } catch (error) {
        console.log("error al obtener el usuario el error es: ",error)
        throw new Error("No se pudo encontrar el usuario")
        
    }
}

export const actualizar = async (req, res) =>{

  try {

    const usuarioNuevo = await actualizarUsuario(req.params.id , req.body)

    res.status(200).json({
      message:"Usuario actualizado",
      data: usuarioNuevo
    })
    console.log("Usuario actualizado", usuarioNuevo)
  } catch (error) {
    console.log("error al actualizar el usuario el error es: ",error)
    res.status(400).json({
      message:"No se pudo actualizar el usuario",
      error: error.message
    })
    
  }
}
