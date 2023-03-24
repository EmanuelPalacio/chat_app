import { Schema, model } from "mongoose";

const menssage = Schema({
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
    ref: "users",
    required: [true, "El usuario es obligatorio"],
  },
});

const ChatGeneralSchema = model("chatGeneral", menssage);
export default ChatGeneralSchema;
