import { Request, Response } from "express";
import { revenue, PrismaClient } from '@prisma/client';

const revenueClient = new PrismaClient().revenue;

export const getAllRevenues = async (req: Request, res: Response): Promise<void> => {
  try {
    const allRevenues: revenue[] = await revenueClient.findMany();

    res.status(200).json({ data: allRevenues });
  } catch (error) {
    console.log(error);
  }
}
