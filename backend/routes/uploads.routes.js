import { Router } from "express";
import { param } from "express-validator";
import { colecctionUpdate } from "../utils/customCheck.js";
import { checkValidator, validateToken } from "../middlewares/index.js";
import multerStorage from "../utils/multerStorage.js";
import {
  updateCloudinary,
  uploadCloudinary,
} from "../controllers/uploads/index.js";

const uploadsRoutes = Router();
const configStorageCloudinary = multerStorage(true);

uploadsRoutes.post(
  "/cloudinary/:colecction/:id",
  validateToken,
  [
    param("id", "Tiene que ser un ID de mongo valida").isMongoId(),
    param("colecction").custom(colecctionUpdate),
    checkValidator,
  ],
  configStorageCloudinary.single("file"),
  uploadCloudinary
);
uploadsRoutes.put(
  "/cloudinary/:colecction/:id",
  validateToken,
  [
    param("id", "Tiene que ser un ID de mongo valida").isMongoId(),
    param("colecction").custom(colecctionUpdate),
    checkValidator,
  ],
  configStorageCloudinary.single("file"),
  updateCloudinary
);

export default uploadsRoutes;
