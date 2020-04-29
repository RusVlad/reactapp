import LoginRepository from "../repository/login";
import UserModel from "../models/user";
import { LoginValidation } from "../validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const ItemsManager = {
  login: async (body) => {
    try {
      const { error } = LoginValidation(body);

      if (error) {
        let errorMessages = error.details.map((err) => err.message);
        throw errorMessages;
      }

      // Find user
      const user = await LoginRepository.findOne(UserModel, body.email);

      if (!user) {
        throw {
          error: ["Email or password is wrong"],
        };
      }

      // Check password
      const validPass = await bcrypt.compare(body.password, user.password);
      if (!validPass) {
        throw {
          error: ["Invalid Password"],
        };
      }

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      return token;
    } catch (err) {
      throw err;
    }
  },
};

export default ItemsManager;
