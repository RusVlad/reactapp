import UserRepository from "../repository/user";

const ItemsController = {
  getUser: async (req, res) => {
    try {
      const data = await UserRepository.findOne(req.body.id);

      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      const data = await UserRepository.login(req.body);

      res.header("auth-token", data.token).send(data);
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
