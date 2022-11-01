import { PrismaClient } from '@prisma/client'
import { prisma } from '../../config/prisma.client';

export class PoolService {
  constructor(
    private prismaClient: PrismaClient = prisma
  ) {}

  getTotalPools = async (): Promise<number> => {
    return this.prismaClient.pool.count();
  };
}
