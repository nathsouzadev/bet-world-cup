import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PoolController } from './pool/pool.controller'

const poolController: PoolController = new PoolController()

const bootstrap = async () => {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true
  })

  fastify.get('/pools/count', poolController.getPools)

  await fastify.listen({ port: 5000, host: '0.0.0.0' })
}

bootstrap()
