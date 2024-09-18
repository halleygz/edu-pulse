import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config";
import mongoose from "mongoose";
import { registerRoutes } from "./routes";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const PORT = config.server.port;

app.use(cors({

  origin: ["https://3000-idx-pla-directed-1725603589203.cluster-4ezwrnmkojawstf2k7vqy36oe6.cloudworkstations.dev", "https://edu-pulse-pi.vercel.app", "http://localhost:3000"],

  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(cookieParser());

(async function startUp() {
  try {
    await mongoose.connect(config.mongodb.url, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });

    console.log("connected to database");

    registerRoutes(app)

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
