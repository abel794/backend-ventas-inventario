import JWT from "jsonwebtoken"

export const veryfyToken = ( req, res, next) =>{

    const token = req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({messge:"!Token requerido¡", ok: false})
    }
    try {
        const decoded = JWT.verify(token, process.env.SECRET_KEY)
        req.usuario = decoded
        next()
    } catch (error) {
        return res.status(401).json({messge:"!Token invalido¡", ok: false})
        
    }
}