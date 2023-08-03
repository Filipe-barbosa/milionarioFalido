import { Request, Response } from "express";
import { expensive, PrismaClient } from '@prisma/client';

const expensiveClient = new PrismaClient().expensive;

export const getAllExpensive = async (req: Request, res: Response): Promise<void> => {
  try {
    const allExpensive: expensive[] = await expensiveClient.findMany();

    res.status(200).json({ data: allExpensive });
  } catch (error) {
    console.log(error);
  }
}

export const getExpensiveById = async (req: Request, res: Response): Promise<void> => {
  try {
    const expensiveId = req.params.id;
    const expensive = await expensiveClient.findUnique({ where: { id: expensiveId } });

    res.status(200).json({ data: expensive })
  } catch (error) {
    console.log(error);
  }
};

export const createExpensive = async (req: Request, res: Response): Promise<void> => {
  try {
    const expensiveData = req.body;
    const expensive = await expensiveClient.create({ data: { ...expensiveData } });

    res.status(201).json({ data: expensive });
  } catch (error) {
    console.log(error);
  }
};

export const updateExpensive = async (req: Request, res: Response): Promise<void> => {
  try {
    const expensiveId = req.params.id;
    const expensiveData = req.body;
    const updatedExpensiveData = await expensiveClient.update({
      where: { id: expensiveId },
      data: { ...expensiveData }
    });

    res.status(200).json({ data: updatedExpensiveData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpensive = async (req: Request, res: Response): Promise<void> => {
  try {
    const expensiveId = req.params.id;
    await expensiveClient.delete({ where: { id: expensiveId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};

