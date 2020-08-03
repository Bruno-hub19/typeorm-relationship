import { Repository, getRepository } from 'typeorm';

import { Order } from 'entities/Order';
import { ICreateOrderDTO } from 'dtos/ICreateOrderDTO';
import { IOrdersRepository } from './interfaces/IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      customer,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }
}

export { OrdersRepository };
