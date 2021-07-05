import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";
import swaggerUi from 'swagger-ui-express'

const swaggerDocument = require('./swagger/swagger.json');

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));

app.use(Router);

var options = {
  explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});