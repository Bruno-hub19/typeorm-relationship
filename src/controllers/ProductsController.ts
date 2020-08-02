import { Request, Response } from 'express';

import { ProductsRepository } from 'repositories/ProductsRepository';
import { CreateProductService } from 'services/CreateProductService';

class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const productsRepository = new ProductsRepository();
    const createProductService = new CreateProductService(productsRepository);

    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}

export { ProductsController };
