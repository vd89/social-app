/** @format */

import React from 'react';
import { makeStyles, Card, Typography, CardMedia, CardContent } from '@material-ui/core';
import connection from '../assets/images/connection.jpg';

const useStyle = makeStyles((theme) => ({
	card: {
		maxWidth: 600,
		margin: 'auto',
		marginTop: theme.spacing(10),
	},
	title: {
		padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
		color: theme.palette.openTitle,
	},
	media: {
		height: 500,
	},
}));

export default function Home() {
	const classes = useStyle();
	return (
		<>
			<Card className={classes.card}>
				<Typography variant='h5' className={classes.title}>
					Home Page
				</Typography>
				<CardMedia className={classes.media} image={connection} title='Connection'></CardMedia>
				<CardContent>
					<Typography variant='body1' component='p'>
						Welcome to Social media App
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}
