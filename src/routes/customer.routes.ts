import { Router } from 'express';

import { CustomersController } from 'controllers/CustomersController';

const customerRoutes = Router();
const customersController = new CustomersController();

customerRoutes.get('/', customersController.index);
customerRoutes.post('/', customersController.create);

export { customerRoutes };
