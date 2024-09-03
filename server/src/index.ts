import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const PORT = config.server.port;

app.use(cors());
app.use(express.json());

(async function startUp() {
  try {
    await mongoose.connect(config.mongodb.url, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });

    console.log("connected to database");

    app.get("/test", (req: Request, res: Response) => {
      res.status(200).json({ messge: "server is running" });
    });

    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("couldn't start server", error);
  }
})();
