import express from "express";
import mongoose from "mongoose";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

import restaurantRoutes from "./routes/restaurant.js";
import userRoutes from "./routes/user.js";
import transactionRoutes from "./routes/transaction.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "./assets")));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/restaurant", restaurantRoutes);
app.use("/user", userRoutes);
app.use("/transaction", transactionRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const CONNECTION_URL = process.env.DB;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
