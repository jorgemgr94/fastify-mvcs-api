import { createClient, RedisClientType } from 'redis';

const REDIS_URI = process.env.REDIS_URI;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
export const redisClient: RedisClientType = createClient({
	password: REDIS_PASSWORD,
	socket: {
		host: REDIS_URI,
		port: 15970
	}
});

export const connectRedis = async () => {
	try {
		await redisClient.connect();
		// eslint-disable-next-line no-console
		console.debug(`Redis connected`);
	} catch (error) {
		throw Error(`Can't connect to Redis ${error}`);
	}
};

export const disconnectRedis = async () => {
	await redisClient.disconnect();
};

export default redisClient;
