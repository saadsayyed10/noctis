import express from "express";
import cors from "cors";
import { ENV } from "./config/env.config";
import { connectDB } from "./config/db.config";
import mainRouter from "./api/routes/index.route";

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
};

startServer();
