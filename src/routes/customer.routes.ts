import { Router } from 'express';

import { CustomersController } from '../controllers/CustomersController';

const customerRoutes = Router();
const customersController = new CustomersController();

customerRoutes.post('/', customersController.create);

export { customerRoutes };
