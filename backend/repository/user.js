const UserRepository = {
  findOne: async (model, searchBy) => {
    try {
      return await model.findOne(searchBy);
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
