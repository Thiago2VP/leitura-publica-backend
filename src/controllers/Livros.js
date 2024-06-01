import Livros from "../models/Livros.js";

class LivrosController {
  async testConnection(req, res) {
    try {
      const livros = new Livros();
      const result = await livros.testConnection();
      res.status(200).send(result);
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

  async insert(req, res) {
    try {
      const livros = new Livros();

      const { nome, capa, conteudo } = req.body;

      const result = await livros.insert({ nome, capa, conteudo });

      res.status(201).send(result);
    } catch (e) {
      console.error(e);
    }
  }

  async update(req, res) {
    try {
      const livros = new Livros();

      const { nome, capa, conteudo } = req.body;

      const result = await livros.update({ nome, capa, conteudo }, req.params.name);

      res.status(200).send(result);
    } catch (e) {
      console.error(e);
    }
  }

  async delete(req, res) {
    try {
      const livros = new Livros();

      const result = await livros.delete(req.params.name);

      res.status(200).send(result);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new LivrosController();
