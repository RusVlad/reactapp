import ItemsManager from "../managers/items";

const ItemsController = {
  getAll: async (req, res) => {
    try {
      const data = await ItemsManager.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await ItemsManager.getOne(id);
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  put: async (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const data = await ItemsManager.put(id, body);
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await ItemsManager.delete(id);
      res.status(200).json(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  createOne: async (req, res) => {
    try {
      const body = req.body;
      const data = await ItemsManager.post(body);
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

export default ItemsController;
