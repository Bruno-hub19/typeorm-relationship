import { IOrdersRepository } from 'repositories/interfaces/IOrdersRepository';
import { Order } from 'entities/Order';

class ListOrdersService {
  constructor(private ordersRepository: IOrdersRepository) { } // eslint-disable-line

  public async execute(): Promise<Order[] | undefined> {
    const orders = await this.ordersRepository.findAll();

    return orders;
  }
}

export { ListOrdersService };
