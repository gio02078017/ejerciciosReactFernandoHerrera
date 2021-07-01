comandos iniciar proyecto node

npm init -y // Sirve para crear el archivo package.json

npm i nodemon -g //sirve para que node coja los cambio mas facil
nodemon index.js //para ejecutar el archivo de node

configurar package.json con nodemon
{
  "name": "calendar-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

agregar a los scripts las siguientes lineas

"dev": "nodemon index.js"
"start": "node index.js"

queda asi

{
  "name": "calendar-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

 npm i express // es para estalar express el paquete para hacer servicios res
 npm i dotenv // para configurar variables de entorno
 npm i cors // para configurar los cors
 npm i express-validator // para validar en express
 

