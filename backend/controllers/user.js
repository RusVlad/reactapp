import UserManager from "../managers/user";

const ItemsController = {
  login: async (req, res) => {
    try {
      const token = await UserManager.login(req.body);
      res.header("auth-token", token).send({ token: token });
    } catch (error) {
      res.json({ error: error });
    }
  },
  register: async (req, res) => {
    try {
      const savedUser = await UserManager.register(req.body);
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
