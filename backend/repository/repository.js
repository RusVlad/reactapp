import DB from "../database";

const DefaultRepositoryFunctions = (model) => ({
  getAll: async () => {
    try {
      return await DB.find(model);
    } catch (error) {
      throw error;
    }
  },
  findOne: async (searchBy) => {
    try {
      return await DB.findOne(model, searchBy);
    } catch (error) {
      throw error;
    }
  },
  put: async (id, body) => {
    try {
      return await DB.put(model, id, body);
    } catch (err) {
      throw err;
    }
  },
  delete: async (id) => {
    try {
      return await DB.delete(model, id);
    } catch (err) {
      throw err;
    }
  },
  post: async (body) => {
    try {
      return await DB.post(body);
    } catch (err) {
      throw err;
    }
  },
});

export default DefaultRepositoryFunctions;
