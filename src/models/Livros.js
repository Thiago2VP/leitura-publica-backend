import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.APP_DB_CONNECTION;

export default class Livros {
  async testConnection() {
    const client = new MongoClient(url);

    try {
      await client.connect();

      const collection = client.db("leituradb").collection("livros");

      if (collection) return "Connected successfully to collection";
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  async select() {
    const client = new MongoClient(url);

    try {
      await client.connect();

      const collection = client.db("leituradb").collection("livros");

      const result = await collection.find({}).toArray();
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  async insert(body) {
    const client = new MongoClient(url);

    try {
      await client.connect();

      const collection = client.db("leituradb").collection("livros");

      await collection.insertOne(body);

      return "Inserted successfully";
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  async update(body, name) {
    const client = new MongoClient(url);

    if (!name) return "Name not found";

    try {
      await client.connect();

      const collection = client.db("leituradb").collection("livros");

      await collection.updateOne({ nome: name }, { $set: body });

      return "Livro successfully updated";
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  async delete(name) {
    const client = new MongoClient(url);

    if (!name) return "Name not found";

    try {
      await client.connect();

      const collection = client.db("leituradb").collection("livros");

      await collection.deleteOne({ nome: name });

      return "Livro successfully deleted";
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}
