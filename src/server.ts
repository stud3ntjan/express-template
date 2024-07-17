import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../dist/swagger.json");
import userRoutes from "./routes/userRouter";

const app = express();
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
