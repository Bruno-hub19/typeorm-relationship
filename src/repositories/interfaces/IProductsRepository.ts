import { Product } from 'entities/Product';
import { ICreateProductDTO } from 'dtos/ICreateProductDTO';

interface IFindProducts {
  id: string;
}

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(product_name: string): Promise<Product | undefined>;
  findAllById(data: IFindProducts[]): Promise<Product[] | undefined>;
}

export { IProductsRepository };
