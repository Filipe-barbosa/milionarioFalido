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
};

export const getRevenueById = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenueId = req.params.id;
    const revenue = await revenueClient.findUnique({ where: { id: revenueId } });

    res.status(200).json({ data: revenue })
  } catch (error) {
    console.log(error);
  }
};

export const createRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenueData = req.body;
    const revenue = await revenueClient.create({ data: { ...revenueData } });

    res.status(201).json({ data: revenue });
  } catch (error) {
    console.log(error);
  }
};

export const updateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenueId = req.params.id;
    const revenueData = req.body;
    const updatedRevenueData = await revenueClient.update({
      where: { id: revenueId },
      data: { ...revenueData }
    });

    res.status(200).json({ data: updatedRevenueData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenueId = req.params.id;
    const revenueData = await revenueClient.delete({ where: { id: revenueId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};
