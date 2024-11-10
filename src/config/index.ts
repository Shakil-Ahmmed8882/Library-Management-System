import { config } from "dotenv";

config();
export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,

  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  reset_pass_ui_link: process.env.reset_pass_ui_link
};
