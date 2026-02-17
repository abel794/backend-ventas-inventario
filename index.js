import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

import rolRouter from './modules/rol/rol.router.js'
app.use("/rol", rolRouter)

import usuarioRouter from "./modules/usuario/usuarios.routes.js"
app.use("/usuario",usuarioRouter)

import productoRouter from "./modules/producto/producto.route.js"
app.use("/producto", productoRouter)

import {prueba} from "./test.js"
app.use("/test", prueba)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
