import { Request, Response } from 'express';

import { OrdersRepository } from 'repositories/OrdersRepository';
import { CreateOrderService } from 'services/CreateOrderService';
import { CustomersRepository } from 'repositories/CustomersRepository';
import { ListOrdersService } from 'services/ListOrdersService';

class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const ordersRepository = new OrdersRepository();
    const createOrderService = new ListOrdersService(ordersRepository);

    const orders = await createOrderService.execute();

    return response.json(orders);
  }

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
