Este proyecto permite gestionar:

Usuarios y roles

Perfiles

Productos y categorías

Inventario y movimientos

Ventas y detalle de ventas

🚀 Tecnologías utilizadas
Capa	Tecnología
Backend	Node.js
Server	Express
Base de datos	MongoDB
ODM	Mongoose
Autenticación	JWT
Validación	(puedes usar Joi/Zod)
Control de versiones	Git + GitHub
📁 Estructura del proyecto
backend-ventas-inventario/
│── config/
│── middlewares/
│── modules/
│     ├── rol/
│     ├── usuario/
│     ├── perfil/
│     ├── categorias/
│     ├── producto/
│     ├── inventario/
│     ├── MovimientoInventario/
│     ├── ventas/
│     └── DetalleVenta/
│── utils/
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

📦 Instalación

Clona el repositorio:

git clone https://github.com/abel794/backend-ventas-inventario.git


Entra al proyecto:

cd backend-ventas-inventario


Instala dependencias:

npm install


Crea el archivo .env con tus variables de entorno:

PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<pass>@cluster...
JWT_SECRET=tu_secreto


Inicia el servidor:

npm start

✨ Endpoints principales

📍 Usuarios

Método	Ruta	Descripción
POST	/api/usuarios	Crear usuario
GET	/api/usuarios/:id	Obtener usuario
PUT	/api/usuarios/:id	Actualizar usuario
DELETE	/api/usuarios/:id	Eliminar usuario

📍 Roles

Método	Ruta
POST	/api/roles
GET	/api/roles
GET	/api/roles/:id
PUT	/api/roles/:id
DELETE	/api/roles/:id

(y similar para inventario, productos, ventas…)

🔐 Middleware

auth.js → valida JWT

role.js → controla acceso por rol

validarBody.js → valida datos usando schemas