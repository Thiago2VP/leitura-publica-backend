import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.APP_DB_CONNECTION

export default class Livros {
  async testConnection() {
    const client = new MongoClient(url);
    
    try {
      
      await client.connect();
      console.log('Connected successfully to server');
      
      const collection = client.db('leituradb').collection('livros');
      console.log('Connected successfully to collection');

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
      console.log('Connected successfully to server');
      
      const collection = client.db('leituradb').collection('livros');
      console.log('Connected successfully to collection');

      const result = await collection.find({}).toArray();
      return result;

    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}