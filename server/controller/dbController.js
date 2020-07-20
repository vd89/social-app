/** @format */

import { connect } from 'mongoose';
import config from '../../config/config';

const { mongoUri, mongoOPT } = config;

export default async () => {
	try {
		await connect(mongoUri, mongoOPT);
    console.log(`Database is connected to the app... 🚀 🚀 🚀`);
	} catch (err) {
		console.log('MongoErr :>> ', err);
	}
};
