# Image definieren
FROM node:latest

# Erstellen eines Work directories
WORKDIR /usr/src/app

# Kopieren von package.json und package-lock.json in docker app.
COPY package*.json ./

# Installieren von NPM packages 
# --> --only=production installiert nur dependencies und nicht die devDependencies.
RUN npm install --only=production

# Kopiren des lokalen codes in das Container image.
COPY . .

# Port Exponieren
EXPOSE 4045

# Startbefehl
CMD ["node", "index.js"]




# Befehl zum erstellen des images
# docker build -t <name-des-images> <Pfad zum Verzeichnes, in dem die Dockerfile liegt>  
# Bsp: docker build -t my-express-app .

# Starten des docker 
# docker run -p <Port auf Computer>:<Port der App in Docker> <name-des-images>
# Bsp: docker run -p 3000:5050 my-express-app






