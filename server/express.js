import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import Template from '../template'

const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())
app.use(compression())


app.get('/',(req,res) => {
  res.status(200).send(Template())
}
)
export default app