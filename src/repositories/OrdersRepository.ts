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
    // const eachProduct = products.map(product => ({
    //   product_id: product.product_id,
    //   price: product.price,
    //   quantity: product.quantity,
    //   order_id: 'testing',
    // }));

    const order = this.ormRepository.create({
      customer,
      order_products: products,
    });

    // console.log('[EACH_PRODUCT]: ', eachProduct);
    console.log('[ORDER]: ', order);

    await this.ormRepository.save(order);

    return order;
  }
}

export { OrdersRepository };
