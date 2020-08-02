import { AppError } from 'errors/AppError';

import { ICreateCustomerDTO } from 'dtos/ICreateCustomerDTO';
import { Customer } from 'entities/Customer';
import { ICustomersRepository } from 'repositories/interfaces/ICustomersRepository';

class CreateCustomerService {
  constructor(private customersRepository: ICustomersRepository) { } // eslint-disable-line

  public async execute({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const findCustomer = await this.customersRepository.findByEmail(email);

    if (findCustomer) {
      throw new AppError('This customer is already registered');
    }

    const customer = await this.customersRepository.create({ name, email });

    return customer;
  }
}

export { CreateCustomerService };
