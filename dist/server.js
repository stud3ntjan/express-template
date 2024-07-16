const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { AppRouter } = require("../src/routes");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const swaggerDocument = require("./swagger.json");

// Initialisierung von expres
const app = express();
app.use(bodyParser.json());

// Swagger Definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API Documentation using Swagger",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Pfad zu den API-Routen
};

const swaggerSpec = swaggerJsdoc(options);

fs.writeFileSync("./swagger.json", JSON.stringify(swaggerSpec, null, 2));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Beispiel-Routen-Datei
const deviceInfoRoutes = require("../src/routes/deviceInfo");
app.use("/api", deviceInfoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Use for development
app.use(cors());
app.use("/v1", AppRouter);

module.exports = app;
