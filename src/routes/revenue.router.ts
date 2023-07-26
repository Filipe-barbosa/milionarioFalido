import { Router } from "express";
import { getAllRevenues } from '../controllers/revenue.controller';


const revenueRouter = Router();

revenueRouter.get('/', getAllRevenues);

export default revenueRouter;
