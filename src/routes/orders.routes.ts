import { Router } from 'express';

import { OrdersController } from 'controllers/OrdersController';

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.get('/', ordersController.index);
ordersRoutes.post('/', ordersController.create);

export { ordersRoutes };
