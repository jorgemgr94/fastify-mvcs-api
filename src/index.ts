import dotenv from 'dotenv';
dotenv.config();

import { MongoDB } from './config/mongoDB';
import { connectRedis } from './config/redis';
import { FastifyBackendApp } from './server';

async function main() {
	await connectRedis();

	const mongoConnection = new MongoDB();
	await mongoConnection.start();

	const server = new FastifyBackendApp();
	await server.start();
}

main();
