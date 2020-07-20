/** @format */
const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8085,
	jwtSecret: process.env.JWT_SECRET || 'I_am_THE_Secret_Key_Process',
	mongoUri:
		process.env.MONGODB_URI ||
		process.env.MONGO_HOST ||
		'mongodb://' +
			(process.env.IP || 'localhost') +
			':' +
			(process.env.MONGO_PORT || '27017') +
			'/social-app',
	mongoOPT: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
};

export default config;
