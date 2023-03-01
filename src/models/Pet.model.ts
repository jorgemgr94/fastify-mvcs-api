import { getModelForClass, ModelOptions, prop } from '@typegoose/typegoose';

enum PetGender {
	MALE = 'male',
	FEMALE = 'female'
}

/**
 * NOTE: typegoose takes the class name as collection name automatically transforming it in plural
 *       i.e: Pet -> pets
 */
@ModelOptions({
	schemaOptions: {
		timestamps: true
	}
})
class Pet {
	@prop({ type: String, trim: true, required: true })
	public name: string;

	@prop({ type: String, enum: PetGender })
	public gender: string;
}

const PetModel = getModelForClass(Pet);

export default PetModel;
