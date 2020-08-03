import { AppError } from 'errors/AppError';

import { IOrdersRepository } from 'repositories/interfaces/IOrdersRepository';
import { Order } from 'entities/Order';
import { ICustomersRepository } from 'repositories/interfaces/ICustomersRepository';
import { IProductsRepository } from 'repositories/interfaces/IProductsRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

class CreateOrderService {
  constructor(
    private customersRepository: ICustomersRepository,
    private productsRepository: IProductsRepository,
    private ordersRepository: IOrdersRepository,
  ) { } // eslint-disable-line

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found');
    }
    const extractProductId = products.filter(product => product.id);

    const findProducts = await this.productsRepository.findAllById(
      extractProductId,
    );

    if (!findProducts) {
      throw new AppError('Products not found');
    }

    const result = findProducts.map(product => {
      return {
        product_id: product.id,
        price: product.price,
        quantity: products.find(each => each.id === product.id)?.quantity || 0,
      };
    });

    const order = await this.ordersRepository.create({
      customer,
      products: result,
    });

    return order;
  }
}

export { CreateOrderService };
