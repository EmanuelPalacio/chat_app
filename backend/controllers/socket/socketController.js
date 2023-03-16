import MenssagesSchema from "../../models/menssagesSchema.js";
import {
  createMenssage,
  findMenssages,
} from "../../service/requestDataBase.js";

export default async function socketController(socket) {
  socket.on("menssage", async ({ msg, id }) => {
    const date = new Date();
    createMenssage(date, msg, id);
  });

  socket.emit("viewMenssage", await findMenssages());
}
