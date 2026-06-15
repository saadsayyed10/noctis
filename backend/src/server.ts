import express from "express";
import cors from "cors";
import { ENV } from "./config/env.config";
import { connectDB } from "./config/db.config";

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use(cors());

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
};

startServer();
