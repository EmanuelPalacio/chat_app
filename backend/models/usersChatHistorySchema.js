import { Schema, model } from "mongoose";

const HistorySchema = Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Los usuarios de la conversacion son obligatorios"],
    },
  ],
  messages_history: [
    {
      date: {
        type: Date,
        required: [true, "la fecha es obligatoria"],
      },
      menssage: {
        type: String,
        required: [true, "El mensaje es obligatorio"],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: [true, "El usuario es obligatorio"],
      },
    },
  ],
});

HistorySchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.history_id = _id;
  return rest;
};
const UsersChatHistorySchema = model("usersChatHistory", HistorySchema);
export default UsersChatHistorySchema;
