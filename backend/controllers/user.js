import UserRepository from "../repository/user";

const ItemsController = {
  updateProfile: async (req, res) => {
    try {
      const { _id: id, ...userInfo } = req.body;
      const data = await UserRepository.updateProfile(
        {
          ...userInfo,
          image: `${process.env.API_URL}/uploads/${req.file.filename}`,
        },
        id
      );

      res.status(200).send(data);
    } catch (error) {
      res.json({ error });
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await UserRepository.findOne(req.body.id);

      res.status(200).send(data);
    } catch (error) {
      res.json({ error });
    }
  },
  login: async (req, res) => {
    try {
      const data = await UserRepository.login(req.body);

      res.header("auth-token", data.token).send(data);
    } catch (error) {
      res.json({ error });
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
      res.json({ error });
    }
  },
};

export default ItemsController;
