import { Container, Grid, Typography } from '@material-ui/core';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import { useSelector } from 'react-redux';

import Post from '../Post/Post';
import useStyles from './styles';

const Posts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.post);
	return (
		<main>
			<div className={classes.heroContent}>
				<Container maxWidth='sm'>
					<Typography
						component='h1'
						variant='h2'
						align='center'
						gutterBottom>
						All posts
					</Typography>
				</Container>
			</div>
			<Container className={classes.cardGrid} maxWidth='md'>
				{posts?.loading ? (
					<HourglassEmptyRoundedIcon
						className={classes.loadingIcon}
					/>
				) : (
					<Grid container spacing={2}>
						{posts.post.length > 0
							? posts.post.map((item) => (
									<Post post={item} key={item.id} />
							  ))
							: 'there is no post to load'}
					</Grid>
				)}
			</Container>
		</main>
	);
};

export default Posts;
