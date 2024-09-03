import { Express, Request, Response } from "express";
import authRoutes from "./authRoutes";

export function registerRoutes(app:Express) {
    app.use("/api/auth", authRoutes)
}