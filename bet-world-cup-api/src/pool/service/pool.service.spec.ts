import { PrismaClient } from '@prisma/client'
import { PoolService } from './pool.service'

jest.mock('../../config/prisma.client')

describe('PoolService', () => {
  const mockPrisma: any = {
    pool: {
      count: jest.fn().mockImplementation(() => Promise.resolve(1))
    },
  }

  const poolService = new PoolService(mockPrisma as PrismaClient)
  it('should return total pool saved', async () => {
    const count = await poolService.getTotalPools()
    expect(count).toBe(1)
  });
});
