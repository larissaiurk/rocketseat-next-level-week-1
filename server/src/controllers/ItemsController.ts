import { Request, Response } from 'express';
import knex from '../database/connections';

require('dotenv/config');

class ItemsController {
  async index (request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        image_url: `${process.env.SERVER_ENDPOINT}/uploads/${item.image}`,
        title: item.title, 
      }
    });
  
    response.json(serializedItems);
  }
}

export default ItemsController;