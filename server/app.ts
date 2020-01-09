import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

// Initialize .env file and retrieve environment variables
dotenv.config();
const { PORT } = process.env;

// Initialize express app
const app: Application = express();

// Example route
app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

// Open the gate
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
