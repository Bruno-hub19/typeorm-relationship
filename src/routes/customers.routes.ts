import { Router } from 'express';

import { CustomersController } from 'controllers/CustomersController';

const customersRoutes = Router();
const customersController = new CustomersController();

customersRoutes.post('/', customersController.create);

export { customersRoutes };
