import { AppError } from 'errors/AppError';

import { IOrdersRepository } from 'repositories/interfaces/IOrdersRepository';
import { Order } from 'entities/Order';
import { ICustomersRepository } from 'repositories/interfaces/ICustomersRepository';

interface IRequest {
  customer_id: string;
}

class CreateOrderService {
  constructor(
    private ordersRepository: IOrdersRepository,
    private customersRepository: ICustomersRepository,
  ) { } // eslint-disable-line

  public async execute({ customer_id }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    const order = await this.ordersRepository.create({ customer });

    return order;
  }
}

export { CreateOrderService };
