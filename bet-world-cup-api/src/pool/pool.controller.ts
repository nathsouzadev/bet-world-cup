import { PoolService } from "./service/pool.service";

export class PoolController {

    constructor(
        private poolService: PoolService = new PoolService()
    ){}

    getPools = async(): Promise<{ count: number }> => {
        const count = await this.poolService.getTotalPools()
        return { count }
    }
}