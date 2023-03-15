import { response, request } from "express";
import userSchema from "../../models/userSchema.js";

const findUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const dataUser = await userSchema.findById(id);
    const { __v, password, ...user } = dataUser._doc;
    res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
      estoy: "aqui",
    });
  }
};
export default findUser;
