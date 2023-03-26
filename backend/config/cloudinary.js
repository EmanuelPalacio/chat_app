import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRETS,
  CLOUDINARY_CLOUD_NAME,
} from "./enviroments.js";

const cloudinaryConfig = () => {
  try {
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRETS,
    });
    console.log("Configuración de Cloudinary exitosa");
  } catch (error) {
    console.log("Error al configurar Cloudinary: ", error);
  }
};

export default cloudinaryConfig;
