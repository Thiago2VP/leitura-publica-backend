import Livros from '../models/Livros.js'

class LivrosController {
  async getDBs(req, res) {
    try {
      const livros = new Livros();
      const response = await livros.getdbs();
      res.send(response);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new LivrosController();