/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import Template from '../template';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(compression());

// Routes
app.get('/', (req, res) => {
	res.status(200).send(Template());
});
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


export default app;
