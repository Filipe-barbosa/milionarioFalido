import { getAllExpensive } from "./expensive.controller";
import { Request, Response } from "express";

const getExpensiveTotal = async () => {
  const expensiveTotal = await getAllExpensive;
  console.log(getAllExpensive)
  return expensiveTotal;
}

export const getBalance = async (req: Request, res: Response): Promise<void> => {
  try {
    const expensiveTotal = getExpensiveTotal();

    res.status(200).json({ data: expensiveTotal });
  } catch (error) {
    console.log(error);
  }
  const expensiveTotal = getExpensiveTotal();
}
