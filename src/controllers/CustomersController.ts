import { Request, Response } from 'express';

import { CreateCustomerService } from 'services/CreateCustomerService';
import { CustomersRepository } from 'repositories/CustomersRepository';

class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const customersRepository = new CustomersRepository();
    const createCustomerService = new CreateCustomerService(
      customersRepository,
    );

    const customer = await createCustomerService.execute({ name, email });

    return response.json(customer);
  }
}

export { CustomersController };
