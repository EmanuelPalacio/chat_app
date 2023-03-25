import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const googleVerify = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export default googleVerify;
