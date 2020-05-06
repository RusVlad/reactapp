import DB from "../database";
import ItemModel from "../models/items";
import { ItemValidation } from "../validation";
import Repository from "./repository";

const ItemsRepository = {
  ...Repository(ItemModel),
  put: async (id, body) => {
    const { error } = ItemValidation(body);

    if (error) {
      let errorMessages = error.details.map((err) => err.message);
      throw errorMessages;
    }

    try {
      return await DB.put(ItemModel, id, body);
    } catch (err) {
      throw err;
    }
  },
  post: async (body) => {
    try {
      const item = new ItemModel({
        title: body.title,
        description: body.description,
        price: body.price,
        published: body.published,
      });

      return await DB.post(item);
    } catch (err) {
      throw err;
    }
  },
};

export default ItemsRepository;
