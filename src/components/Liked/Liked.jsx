import { Container, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import useStyles from './styles';

const Liked = () => {
	const classes = useStyles();
	const act = useSelector((state) => state.act);
	return (
		<Container>
			<Typography className={classes.lead} variant='h3'>
				{act.like.length > 0
					? 'Your liked posts'
					: 'You Have no post in this list'}
			</Typography>
			<Grid container spacing={2} justify='center'>
				{act.like.length > 0 &&
					act.like.map((item) => (
						<Post key={item.id} post={item} like />
					))}
			</Grid>
			<br />
			<br />
			<br />
		</Container>
	);
};

export default Liked;
