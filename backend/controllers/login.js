import LoginManager from "../managers/login";

const ItemsController = {
  login: async (req, res) => {
    try {
      const token = await LoginManager.login(req.body);
      res.header("auth-token", token).send({ token: token });
    } catch (error) {
      res.json({ message: error });
    }
  },
};

export default ItemsController;
