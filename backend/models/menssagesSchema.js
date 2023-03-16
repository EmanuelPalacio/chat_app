import { Schema, model } from "mongoose";

const menssages = Schema({
  date: {
    type: Date,
    required: [true, "la fecha es obligatoria"],
  },
  msg: {
    type: String,
    required: [true, "El mensaje es obligatorio"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "El usuario es obligatorio"],
  },
});
const MenssagesSchema = model("menssages", menssages);
export default MenssagesSchema;
