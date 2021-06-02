import { Container, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import useStyles from './styles';

const Unliked = () => {
	const classes = useStyles();
	const act = useSelector((state) => state.act);
	return (
		<Container>
			<Typography className={classes.lead} variant='h3'>
				{act.disLike.length > 0
					? 'Your disliked posts'
					: 'You Have no post in this list'}
			</Typography>
			<Grid container spacing={2} justify='center'>
				{act.disLike.length > 0 &&
					act.disLike.map((item) => (
						<Post key={item.id} post={item} disLike />
					))}
			</Grid>
			<br />
			<br />
			<br />
		</Container>
	);
};

export default Unliked;
