const Repository = {
  getAll: async (model) => {
    try {
      return await model.find({});
    } catch (error) {
      throw error;
    }
  },
  getOne: async (model, id) => {
    try {
      return await model.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },
  put: async (model, id, body) => {
    try {
      return await model.findByIdAndUpdate(id, body, { new: true });
    } catch (err) {
      throw err;
    }
  },
  delete: async (model, id) => {
    try {
      return await model.findByIdAndRemove(id);
    } catch (err) {
      throw err;
    }
  },
  post: async (model, body) => {
    try {
      const item = new model({
        title: body.title,
        description: body.description,
        price: body.price,
        published: body.published,
      });

      return await item.save();
    } catch (err) {
      throw err;
    }
  },
};

export default Repository;
