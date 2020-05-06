import ItemsRepository from "../repository/items";

const ItemsController = {
  getAll: async (req, res) => {
    try {
      const data = await ItemsRepository.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  findOne: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await ItemsRepository.findOne({ _id: id });
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  put: async (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const data = await ItemsRepository.put(id, body);
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await ItemsRepository.delete(id);
      res.status(200).json(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
  createOne: async (req, res) => {
    try {
      const body = req.body;
      const data = await ItemsRepository.post(body);
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

export default ItemsController;
