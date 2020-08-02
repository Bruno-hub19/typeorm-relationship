import { AppError } from 'errors/AppError';

import { IProductsRepository } from 'repositories/interfaces/IProductsRepository';
import { ICreateProductDTO } from 'dtos/ICreateProductDTO';
import { Product } from 'entities/Product';

class CreateProductService {
  constructor(private productsRepository: IProductsRepository) { } // eslint-disable-line

  public async execute({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const findProductWithSameName = await this.productsRepository.findByName(
      name,
    );

    if (findProductWithSameName) {
      throw new AppError('This product is already registered');
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;
  }
}

export { CreateProductService };
