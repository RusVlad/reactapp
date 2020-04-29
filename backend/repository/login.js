const LoginRepository = {
  findOne: async (model, email) => {
    try {
      return await model.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  },
};

export default LoginRepository;
