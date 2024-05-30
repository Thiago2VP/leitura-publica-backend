import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.APP_DB_CONNECTION

export default class Livros {
  async getdbs() {
    const client = new MongoClient(url);
    
    try {
      
      await client.connect();
      
      const databasesList = await client.db().admin().listDatabases();

      console.log(`Databases: ${databasesList}`);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}