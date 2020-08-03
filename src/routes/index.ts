import { Router } from 'express';

import { customersRoutes } from './customers.routes';
import { productsRoutes } from './products.routes';
import { ordersRoutes } from './orders.routes';

const routes = Router();

routes.use('/customers', customersRoutes);
routes.use('/products', productsRoutes);
routes.use('/orders', ordersRoutes);

export { routes };
