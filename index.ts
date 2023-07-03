import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import db from "./config/db";
import cors from "cors";
const { swaggerDocs } = require("./swagger/swagger");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("Server listening on port 3001");
    swaggerDocs(app, 3001);
  });
});
