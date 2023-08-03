import { Router } from "express";
import { getBalance } from "../controllers/balance.controller";

const balanceRouter = Router();

balanceRouter.get('/', getBalance)

export default balanceRouter;
