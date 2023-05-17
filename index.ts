import express, { Request, Response, NextFunction } from "express";
const app = express();
import bodyParser from "body-parser";
import router from "./src/routes";

app.use(bodyParser.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(3001, () => console.log("Server listening on port 3001"));
