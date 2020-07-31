import { Router } from 'express';

import { customerRoutes } from './customer.routes';

const routes = Router();

routes.use('/customers', customerRoutes);

export { routes };
