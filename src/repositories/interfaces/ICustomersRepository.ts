import { Customer } from 'entities/Customer';
import { ICreateCustomerDTO } from 'dtos/ICreateCustomerDTO';

interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;
  findById(customer_id: string): Promise<Customer | undefined>;
  findByEmail(customer_email: string): Promise<Customer | undefined>;
  findAll(): Promise<Customer[] | undefined>;
}

export { ICustomersRepository };
