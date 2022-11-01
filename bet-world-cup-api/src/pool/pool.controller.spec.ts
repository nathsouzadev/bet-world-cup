import { PoolController } from "./pool.controller";
import { PoolService } from "./service/pool.service";

describe('PoolController', () => {
    const mockPoolService: Partial<PoolService> = {
        getTotalPools: jest.fn().mockImplementation(() => Promise.resolve(1))
    }
    const poolController = new PoolController(mockPoolService as PoolService);
    it('should return a total number of pools', async() => {
        const response = await poolController.getPools()
        expect(response).toMatchObject({ count: 1 })
    })
})