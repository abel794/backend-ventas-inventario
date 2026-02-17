export const permitirRoles = (...rolesPermitidos) =>{
    return(req,res, next)=>{
        if(!rolesPermitidos.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: 'No tiene permisos para realizar esta accion'
            })
        }
        next()
    }
}