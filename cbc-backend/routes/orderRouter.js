import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';

const orderRouter = express.Router();

// Protect order creation and fetching with JWT auth
orderRouter.post('/', auth, createOrder);
orderRouter.get('/', auth, getOrders);

export default orderRouter;