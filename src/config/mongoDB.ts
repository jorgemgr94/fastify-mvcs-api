import { connect, ConnectOptions, Mongoose, set } from 'mongoose';

export class MongoDB {
	public connection: Mongoose | null = null;

	async start() {
		const { MONGODB_URI } = process.env;
		if (!MONGODB_URI) throw new Error(`MONGODB_URI not specified`);

		const mongooseOptions: ConnectOptions = {};

		set('strictQuery', false);
		this.connection = await connect(MONGODB_URI, mongooseOptions);

		// eslint-disable-next-line no-console
		console.debug(`MongoDB connected`);
	}

	async stop() {
		try {
			if (this.connection) await this.connection.disconnect();
		} catch (error) {
			throw Error(`Can't disconnect from database server ${error}`);
		}
	}
}
