import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import { v2 as cloudinary } from "cloudinary";
import router from "./routes/index.routes.js";
import socketController from "./controllers/socket/socketController.js";

/* ------ Create Server ------- */
const app = express();
const server = createServer(app);
export const io = new Server(server, {
  /* options */
  cors: {
    origin: "*",
  },
});

/* ------ SERVER CONFIG ------- */

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
server.listen(process.env.PORT, () => {
  console.log("server iniciado");
});

/* ------ SOCKET IO ------- */
io.on("connection", socketController);
/* ------ CLOUDINARY ------- */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETS,
});

/* ------ CONNECT MONGODB ATLAS ------- */
try {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_CONNECTION);
  console.log("exito al conectar con mongo atlas");
} catch (error) {
  console.log(error);
}
