import { Router } from 'express';

import { customersRoutes } from './customers.routes';
import { productsRoutes } from './products.routes';

const routes = Router();

routes.use('/customers', customersRoutes);
routes.use('/products', productsRoutes);

export { routes };
