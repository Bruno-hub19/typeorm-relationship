import { ICustomersRepository } from '../repositories/interfaces/ICustomersRepository';
import { Customer } from '../entities/Customer';

class ListCustomersService {
  constructor(private customersRepository: ICustomersRepository) { } // eslint-disable-line

  public async execute(): Promise<Customer[] | undefined> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}

export { ListCustomersService };
