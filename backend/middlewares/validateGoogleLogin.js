import { check, validationResult } from "express-validator";

const validateGoogleLogin = [
  check("email", "el email es obligatorio").notEmpty(),
  check("google", "el google es obligatorio").notEmpty(),
  check("name", "el name es obligatorio").notEmpty(),
  check("image", "el image es obligatorio").notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    next();
  },
];
export default validateGoogleLogin;
