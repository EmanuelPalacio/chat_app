import ChatGeneralSchema from "../models/chatGeneralSchema.js";

export const createMenssage = async (date, msg, id) => {
  const saveMsg = await ChatGeneralSchema.create({ date, msg, user: id });
  saveMsg.save();
};

export const findMenssages = async () => {
  const data = await ChatGeneralSchema.find().populate("user");
  return data;
};
