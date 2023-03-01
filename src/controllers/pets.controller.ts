import { FastifyReply, FastifyRequest } from 'fastify';
import PetModel from '../models/Pet.model';

import { setCacheJSON, getCacheJSON } from '../services/cache.service';

export async function findAll(_: FastifyRequest, reply: FastifyReply) {
	try {
		const pets = await PetModel.find();
		reply.code(200).send(pets);
	} catch (error) {
		reply.code(500).send(error);
	}
}

export async function findOne(
	req: FastifyRequest<{ Params: { id: string } }>,
	reply: FastifyReply
) {
	try {
		const { id } = req.params;

		// retrieve from cache
		const petCache = await getCacheJSON(id);
		if (petCache) {
			reply.code(200).send(petCache);
			return;
		}

		const pet = await PetModel.findById(id);
		if (!pet) reply.code(404).send(id);

		// set cache value
		// TODO: check why Typescript compiler isn't inferring that pet can't be null
		//       because of previous validation
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		await setCacheJSON(id, pet!.toJSON());

		reply.code(200).send(pet);
	} catch (error) {
		reply.code(500).send(error);
	}
}
