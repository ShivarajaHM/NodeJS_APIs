// import express from 'express';
// import bodyParser from "body-parser";
// // import routes from './routes'
// const app = express();
// // var router = express.Router()

// app.use(bodyParser.json());

// // router(routes)

// app.get("/", (req, res, next) => {
  
//  res.json({ message: "from index api" });

// });


// app.listen(8080, () => {

//   console.log(`Server is running`);


// });

import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});