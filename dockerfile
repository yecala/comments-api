# Usar Node.js LTS
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar
CMD ["node", "src/app.js"]
