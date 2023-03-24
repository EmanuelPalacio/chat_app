import { Schema, model, Types } from "mongoose";

const user = Schema({
  name: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "el correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "la contraseña es obligatoria"],
  },
  image: {
    type: String,
  },
  //image_id va a guar el public_id que viene de clodinary para facilitar la eliminacion de las imagenes en caso de ser requerido
  image_id: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  condition: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
  contacts: [
    {
      contact: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      chat_history: {
        type: Schema.Types.ObjectId,
        ref: "usersChatHistory",
      },
    },
  ],
});
//Metodo para renombrar id de mongo
/* UsuarioSchema.methods.toJSON = function() {
  const { __v, password, _id, ...usuario  } = this.toObject();
  usuario.uid = _id;
  return usuario;
} */

const UserSchema = model("users", user);
export default UserSchema;
