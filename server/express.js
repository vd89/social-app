/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import path from 'path';

import Template from '../template';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import devBundle from './devBundle';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

//Bundler app
devBundle.compile(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(compression());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

// Routes
app.get('/', (req, res) => {
	res.status(200).send(Template());
});
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		return res.status(401).json({ error: err.name + ': ' + err.message });
	} else if (err) {
		console.log(err);
		return res.status(400).json({ error: err.name + ': ' + err.message });
	}
});

export default app;
