import { Router } from 'express';

import { customerRoutes } from './customer.routes';
import { ordersRoutes } from './orders.routes';

const routes = Router();

routes.use('/customers', customerRoutes);
routes.use('/orders', ordersRoutes);

export { routes };
