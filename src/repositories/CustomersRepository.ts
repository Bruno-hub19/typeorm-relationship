import { Repository, getRepository } from 'typeorm';

import { Customer } from 'entities/Customer';
import { ICreateCustomerDTO } from 'dtos/ICreateCustomerDTO';
import { ICustomersRepository } from './interfaces/ICustomersRepository';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async create({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create({ name, email });

    await this.ormRepository.save(customer);

    return customer;
  }

  public async findByEmail(
    customer_email: string,
  ): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { email: customer_email },
    });

    return customer;
  }

  public async findById(customer_id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { id: customer_id },
    });

    return customer;
  }
}

export { CustomersRepository };
