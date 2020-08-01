import { Order } from 'entities/Order';
import { ICreateOrderDTO } from 'dtos/ICreateOrderDTO';

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAll(): Promise<Order[] | undefined>;
}

export { IOrdersRepository };
