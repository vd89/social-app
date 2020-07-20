import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())
app.use(compression())

export default app