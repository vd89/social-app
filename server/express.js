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
import postRoutes from './routes/postRoutes';
import devBundle from './devBundle';

// Modules for server side rendering
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MainRoute from '../client/MainRoute';
import { StaticRouter } from 'react-router';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core';
import theme from './../client/theme';


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
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', postRoutes);

app.use('*', (req, res) => {
	const sheet = new ServerStyleSheets();
	const context = {};
	const markup = ReactDOMServer.renderToString();
	sheet.collect(
		<StaticRouter location={req.url} context={context}>
			<ThemeProvider theme={theme}>
				<MainRoute />
			</ThemeProvider>
		</StaticRouter>
	);
	if (context.url) {
		return res.redirect(303, context.url);
	}
	const css = sheet.toString();
	res.status(200).send(
		Template({
			markup: markup,
			css: css,
		})
	);
});

// Catch unauthorized errors
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		return res.status(401).json({ error: err.name + ': ' + err.message });
	} else if (err) {
		console.log(err);
		return res.status(400).json({ error: err.name + ': ' + err.message });
	}
});

export default app;
