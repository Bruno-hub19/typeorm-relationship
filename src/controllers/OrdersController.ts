import { Request, Response } from 'express';

import { ProductsRepository } from 'repositories/ProductsRepository';
import { OrdersRepository } from 'repositories/OrdersRepository';
import { CustomersRepository } from 'repositories/CustomersRepository';
import { CreateOrderService } from 'services/CreateOrderService';

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const customersRepository = new CustomersRepository();
    const productsRepository = new ProductsRepository();
    const ordersRepository = new OrdersRepository();

    const createOrderService = new CreateOrderService(
      customersRepository,
      productsRepository,
      ordersRepository,
    );

    const order = await createOrderService.execute({ customer_id, products });

    return response.json(order);
  }
}

export { OrdersController };
