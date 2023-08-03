import { Request, Response } from "express";
import { expensive, PrismaClient, revenue } from '@prisma/client';

const getExpensiveTotal = (allExpensive: expensive[], allRevenues: revenue[]) => {
  const expensiveTotal = allExpensive.reduce((total, expensive) => total + expensive.value, 0);
  const revenueTotal = allRevenues.reduce((total, revenue) => total + revenue.value, 0);

  return revenueTotal - expensiveTotal;
}

const expensiveClient = new PrismaClient().expensive;
const revenueClient = new PrismaClient().revenue;

export const getBalance = async (req: Request, res: Response): Promise<void> => {
  try {
    const allExpensive: expensive[] = await expensiveClient.findMany();
    const allRevenues: revenue[] = await revenueClient.findMany();

    const total = getExpensiveTotal(allExpensive, allRevenues);
    res.status(200).json({ data: { totalValue: total } });
  } catch (error) {
    console.log(error);
  }
}
