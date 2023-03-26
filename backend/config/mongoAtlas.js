import mongoose from "mongoose";
import { MONGODB_CONNECTION } from "./enviroments.js";

const mongoAtlas = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGODB_CONNECTION);
    console.log("exito al conectar con mongo atlas");
  } catch (error) {
    console.log(error);
  }
};
export default mongoAtlas;
