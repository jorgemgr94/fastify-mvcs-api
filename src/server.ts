import fastify, { FastifyInstance } from 'fastify';

import petRouter from './routes/pets.route';

export class FastifyBackendApp {
	server: FastifyInstance;

	async start() {
		this.server = fastify();

		this.registerRoutes();

		const PORT = process.env.PORT;
		if (!PORT) throw new Error(`PORT not specified`);

		// eslint-disable-next-line no-console
		console.debug(`Server starting on port ${PORT}`);

		return await this.server.listen({
			port: Number(PORT),
			host: '0.0.0.0'
		});
	}

	async stop() {
		await this.server.close();
	}

	registerRoutes() {
		this.server.register(petRouter, { prefix: '/api/v1/pets' });
	}
}
