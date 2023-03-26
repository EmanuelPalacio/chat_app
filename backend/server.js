import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import socketController from "./controllers/socket/socketController.js";
import { app, io, mongoAtlas, PORT, server } from "./config/index.js";
import cloudinaryConfig from "./config/cloudinary.js";

/* ------ SERVER CONFIG ------- */

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
server.listen(PORT, () => {
  console.log("server iniciado");
});

/* ------ SOCKET IO ------- */
io.on("connection", socketController);
/* ------ CLOUDINARY ------- */
cloudinaryConfig();
/* ------ CONNECT MONGODB ATLAS ------- */
mongoAtlas();
