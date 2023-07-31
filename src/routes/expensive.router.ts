import { Router } from "express";
import { getAllExpensive, getExpensiveById,createExpensive,deleteExpensive,updateExpensive } from "../controllers/expensive.controller";


const expensiveRouter = Router();

expensiveRouter.get('/',getAllExpensive)
expensiveRouter.get('/:id',getExpensiveById)
expensiveRouter.post('/',createExpensive)
expensiveRouter.post('/:id',deleteExpensive)
expensiveRouter.post('/:id',updateExpensive)

export default expensiveRouter;
