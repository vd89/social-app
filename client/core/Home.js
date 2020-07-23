/** @format */

import React, { useState, useEffect } from 'react';
import { makeStyles, Card, Typography, CardMedia, CardContent, Grid } from '@material-ui/core';
import connection from '../assets/images/connection.jpg';
import auth from '../auth/authHelper';
import Newsfeed from '../post/Newsfeed';
import FindPeople from '../user/FindPeople';

const useStyle = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 30,
	},
	card: {
		maxWidth: 600,
		margin: 'auto',
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
	title: {
		padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
		color: theme.palette.text.secondary,
	},
	media: {
		minHeight: 400,
	},
	credit: {
		padding: 10,
		textAlign: 'right',
		backgroundColor: '#ededed',
		borderBottom: '1px solid #d0d0d0',
		'& a': {
			color: '#3f4771',
		},
	},
}));

export default function Home({ history }) {
	const classes = useStyle();
	const [defaultPage, setDefaultPage] = useState(false);
	useEffect(() => {
		setDefaultPage(auth.isAuthenticate());
		const unlisten = history.listen(() => {
			setDefaultPage(auth.isAuthenticate());
		});
		return () => {
			unlisten();
		};
	}, []);
	return (
		<div className={classes.root}>
			{!defaultPage && (
				<Grid container spacing={8}>
					<Grid item xs={12}>
						<Card className={classes.card}>
							<Typography variant='h6' className={classes.title}>
								Home Page
							</Typography>
							<CardMedia className={classes.media} image={connection} title='Connection' />
							<CardContent>
								<Typography type='body1' component='p'>
									Welcome to the Social Communication
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			)}
			{defaultPage && (
				<Grid container spacing={8}>
					<Grid item xs={8} sm={7}>
						<Newsfeed />
					</Grid>
					<FindPeople />
				</Grid>
			)}
		</div>
	);
}
