import { FastifyInstance } from 'fastify';
import { findAll, findOne } from '../controllers/pets.controller';

async function petRouter(fastify: FastifyInstance) {
	fastify.route({
		method: 'GET',
		url: '/',
		handler: findAll
	});

	fastify.route({
		method: 'GET',
		url: '/:id',
		handler: findOne
	});
}

export default petRouter;
