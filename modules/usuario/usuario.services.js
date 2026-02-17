/// usuario.services.js
import * as repo from './usuario.repository.js'

export const crearUsuario = async (data) => {

    const existe = await repo.obtenerUsuario(data.correo)

    if (existe) {
        throw new Error("el usuario con el email ya existe")
    }

    return repo.crearUsuario(data)
}

export const obtenerUsuario = async () =>{

    const usuario = await repo.obtenerusuario()
    
    if (!usuario){
        throw new Error("el usuario no existe")
    }
    return usuario
}

export const obtenerCorreo = async (correo) =>{

    const usuario = await repo.obtenerPorCorreo(correo)

    if (!usuario){
        throw new Error("el usuario no existe")
    }
    return usuario
}

export const actualizarUsuario = async (id, data) =>{

    const usuario = await repo.actualizarUsuario(id, data);

    if (!usuario){
        throw new Error("el usuario no existe")
    }
    return usuario
}

export const eliminarUsuario = async (id) =>{

    const usuario = await repo.eliminarUsuario(id);

    if(!usuario){
        throw new Error("el usuario no existe")
    }
    return usuario
}