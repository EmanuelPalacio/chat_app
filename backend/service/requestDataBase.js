import MenssagesSchema from "../models/menssagesSchema.js";

export const createMenssage = async (date, msg, id) => {
  const saveMsg = await MenssagesSchema.create({ date, msg, user: id });
  saveMsg.save();
};

export const findMenssages = async () => {
  const data = await MenssagesSchema.find().populate("user");
  return data;
};
