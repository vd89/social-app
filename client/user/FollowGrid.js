/** @format */

import React from 'react';
import { makeStyles, GridList, Avatar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(2),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	bigAvatar: {
		width: 60,
		height: 60,
		margin: 'auto',
	},
	gridList: {
		width: 500,
		height: 220,
	},
	tileText: {
		textAlign: 'center',
		marginTop: 10,
	},
}));
function FollowGrid(props) {
	const classes = useStyles();
	console.log(props.people);
	return (
		<div className={classes.root}>
			<GridList cellHeight={160} className={classes.gridList} cols={4}>
				{props.pepole.map((person, i) => {
					return (
						<GridListTile style={{ height: 120 }} key={i}>
							<Link to={'/user/' + person._id}>
								<Avatar src={'/api/users/photo/' + person.id} className={classes.bigAvatar} />
								<Typography className={classes.tileText}>{person.name}</Typography>
							</Link>
						</GridListTile>
					);
				})}
			</GridList>
		</div>
		// <div>{props.people}</div>
	);
}
FollowGrid.propTypes = {
	people: PropTypes.array.isRequired,
};

export default FollowGrid;
