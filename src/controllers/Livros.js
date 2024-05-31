import Livros from '../models/Livros.js'

class LivrosController {
  async testConnection(req, res) {
    try {
      const livros = new Livros();
      await livros.testConnection();
      res.status(200).send("Connection Success");
    } catch (e) {
      console.error(e);
    }
  }

  async index(req, res) {
    try {
      const livros = new Livros();
      const result = await livros.select();
      res.status(200).send(result);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new LivrosController();