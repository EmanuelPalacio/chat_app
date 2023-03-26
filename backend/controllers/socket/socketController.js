import { io } from "../../config/index.js";
import {
  createMenssage,
  findMenssages,
} from "../../service/requestDataBase.js";

export default async function socketController(socket) {
  console.log("se conecto ", socket.id);
  socket.emit("viewMenssage", await findMenssages());

  socket.on("menssage", async ({ msg, id }) => {
    const date = new Date();
    await createMenssage(date, msg, id);
    io.emit("viewMenssage", await findMenssages());
  });
}
