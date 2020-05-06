import UserRepository from "../repository/user";

const ItemsController = {
  getUser: async (req, res) => {
    try {
      const data = UserRepository.findOne(req.body);
      res.status(200).send({ user: data });
    } catch (error) {
      res.json({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      const token = await UserRepository.login(req.body);
      res.header("auth-token", token).send({ token: token });
    } catch (error) {
      res.json({ error: error });
    }
  },
  register: async (req, res) => {
    try {
      const savedUser = await UserRepository.register(req.body);
      res.json({
        message: "User created",
        user: savedUser._id,
      });
    } catch (error) {
      res.json({ error: error });
    }
  },
};

export default ItemsController;
