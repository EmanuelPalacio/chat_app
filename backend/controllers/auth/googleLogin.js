import { request, response } from "express";
import bcryptjs from "bcryptjs";
import userSchema from "../../models/userSchema.js";
import generateJwt from "../../utils/generateJwt.js";
import googleVerify from "../../utils/googleVerify.js";

const googleLogin = async (req = request, res = response) => {
  try {
    const { token: googleToken } = req.headers;
    const { email, name, picture } = await googleVerify(googleToken);
    const findUser = await userSchema.findOne({ email });

    if (!findUser) {
      const salt = bcryptjs.genSaltSync();
      const userCreate = await userSchema.create({
        email,
        name,
        image: picture,
        password: ":P",
        google: true,
      });
      userCreate.password = bcryptjs.hashSync(userCreate.password, salt);
      await userCreate.save();
    }
    const { _id, rol } = findUser._doc;

    const token = await generateJwt(_id, rol);
    res.status(200).json({
      ok: true,
      msg: "se recibio el token",
      token,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
export default googleLogin;
