import ItemsRepository from "../repository/items";
import ItemModel from "../models/items";
import { ItemValidation } from "../validation";

const ItemsManager = {
  getAll: async () => {
    try {
      const data = await ItemsRepository.getAll(ItemModel);
      return data;
    } catch (err) {
      throw err;
    }
  },
  getOne: async (id) => {
    try {
      const data = await ItemsRepository.getOne(ItemModel, id);
      return data;
    } catch (err) {
      throw err;
    }
  },
  put: async (id, body) => {
    const { error } = ItemValidation(body);

    if (error) {
      let errorMessages = error.details.map((err) => err.message);
      throw errorMessages;
    }

    try {
      const data = await ItemsRepository.put(ItemModel, id, body);
      return data;
    } catch (err) {
      throw err;
    }
  },
  delete: async (id) => {
    try {
      const data = await ItemsRepository.delete(ItemModel, id);
      return data;
    } catch (err) {
      throw err;
    }
  },
  post: async (body) => {
    const { error } = ItemValidation(body);
    if (error) {
      let errorMessages = error.details.map((err) => err.message);
      throw errorMessages;
    }

    try {
      const data = await ItemsRepository.post(ItemModel, body);
      return data;
    } catch (err) {
      throw err;
    }
  },
};

export default ItemsManager;
