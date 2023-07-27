import { Router } from "express";
import { getAllRevenues } from '../controllers/revenue.controller';
import { getAllExpensive } from "../controllers/expensive.controller";


const revenueRouter = Router();
const expensiveRouter = Router();

revenueRouter.get('/', getAllRevenues);
expensiveRouter.get('/',getAllExpensive)

export default revenueRouter;
