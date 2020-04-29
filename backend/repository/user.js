const UserRepository = {
  findOne: async (model, email) => {
    try {
      return await model.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  },
  register: async (model, body, hashPassword) => {
    try {
      const user = new model({
        username: body.username,
        password: hashPassword,
        email: body.email,
      });

      const savedUser = await user.save();
      return savedUser;
    } catch (error) {
      throw error;
    }
  },
};

export default UserRepository;
