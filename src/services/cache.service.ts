import { redisClient } from '../config/redis';

export async function getCacheJSON(id: string) {
	return await redisClient.json.get(id);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function setCacheJSON(id: string, value: Record<string, any>) {
	return await redisClient.json.set(id, '$', value);
}
