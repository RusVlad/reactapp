import DB from "../database";
import Repository from "./repository";
import UserModel from "../models/user";
import { LoginValidation, RegisterValidation } from "../validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserRepository = {
  ...Repository(UserModel),
  login: async (body) => {
    try {
      const { error } = LoginValidation(body);

      if (error) {
        let errorMessages = error.details.map((err) => err.message);
        throw errorMessages;
      }

      // Find user
      const user = await DB.findOne(UserModel, {
        email: body.email,
      });

      if (!user) {
        throw ["Email or password is wrong"];
      }

      // Check password
      const validPass = await bcrypt.compare(body.password, user.password);
      if (!validPass) {
        throw ["Invalid Password"];
      }

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      return token;
    } catch (err) {
      throw err;
    }
  },
  register: async (body) => {
    try {
      const { error } = RegisterValidation(body);
      if (error) {
        let errorMessages = error.details.map((err) => err.message);
        throw errorMessages;
      }

      // Check availability
      const emailExists = await DB.findOne(UserModel, {
        email: body.email,
      });

      if (emailExists) {
        throw ["User with that email already exists"];
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(body.password, salt);

      const user = new UserModel({
        username: body.username,
        password: hashPassword,
        email: body.email,
      });

      const savedUser = await DB.post(user);
      return savedUser;
    } catch (err) {
      throw err;
    }
  },
};

export default UserRepository;
