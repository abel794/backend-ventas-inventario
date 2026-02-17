import bcrypt from "bcryptjs";

export const generarHash= (contrasena) => {
    return bcrypt.hashSync(contrasena, 10)
}
export const copararContrasena = (contrasena, hash) => {
    return bcrypt.compareSync(contrasena, hash)
}