import { Repository, getRepository } from 'typeorm';

import { ICreateOrderDTO } from 'dtos/ICreateOrderDTO';
import { Order } from 'entities/Order';
import { IOrdersRepository } from './interfaces/IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findAll(): Promise<Order[] | undefined> {
    const orders = await this.ormRepository.find();

    return orders;
  }

  public async create({ customer }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({ customer });

    await this.ormRepository.save(order);

    return order;
  }
}

export { OrdersRepository };
