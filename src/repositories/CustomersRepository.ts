import { Repository, getRepository } from 'typeorm';

import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { Customer } from '../entities/Customer';
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

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({ where: { email } });

    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({ where: { id } });

    return customer;
  }
}

export { CustomersRepository };
