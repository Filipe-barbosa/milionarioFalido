import { Router } from "express";
import { createRevenue, deleteRevenue, getAllRevenues, getRevenueById, updateRevenue } from '../controllers/revenue.controller';


const revenueRouter = Router();
const expensiveRouter = Router();

revenueRouter.get('/', getAllRevenues);
revenueRouter.get('/:id', getRevenueById);
revenueRouter.post('/', createRevenue);
revenueRouter.put('/:id', updateRevenue);
revenueRouter.delete('/:id', deleteRevenue);

export default revenueRouter;
