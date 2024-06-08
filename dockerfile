# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación React al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Construye la aplicación React para producción
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]