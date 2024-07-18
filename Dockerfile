# neuestes node-image
FROM node:latest

# umgebungsvariable mein name
ENV NAME="Jan"

# inhalt kopieren
COPY . /app

# arbeitsverzeichnis im container
WORKDIR /app

# echo befehl
CMD ["sh", "-c", "echo Hallo $NAME! && npm install && npm start"]
