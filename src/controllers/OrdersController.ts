import { Request, Response } from 'express';

import { OrdersRepository } from 'repositories/OrdersRepository';
import { CreateOrderService } from 'services/CreateOrderService';
import { CustomersRepository } from 'repositories/CustomersRepository';

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id } = request.body;

    const ordersRepository = new OrdersRepository();
    const customersRepository = new CustomersRepository();
    const createOrderService = new CreateOrderService(
      ordersRepository,
      customersRepository,
    );

    const order = await createOrderService.execute({ customer_id });

    return response.json(order);
  }
}

export { OrdersController };
