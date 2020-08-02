import { Repository, getRepository } from 'typeorm';
import { Product } from 'entities/Product';
import { ICreateProductDTO } from 'dtos/ICreateProductDTO';
import { IProductsRepository } from './interfaces/IProductsRepository';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({ name, price, quantity });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(product_name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { name: product_name },
    });

    return product;
  }

  public async findAllById(
    products_id: IFindProducts[],
  ): Promise<Product[] | undefined> {
    const product = await this.ormRepository.findByIds(products_id);

    return product;
  }
}

export { ProductsRepository };
