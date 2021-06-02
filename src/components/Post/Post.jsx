import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';
import actions from '../../store/act/action';

const Post = ({ post, like, disLike }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const act = useSelector((state) => state.act);

	const likeHandler = (e) => {
		const likeIndex = act.like.includes(post);
		if (likeIndex) {
			return toast.error('you already added it to like list');
		} else {
			dispatch(actions.removeDisLike(post.id));
			dispatch(actions.addLike(post));
			return toast.success('updated like list');
		}
	};

	const disLikeHandler = (e) => {
		const disLikeIndex = act.disLike.includes(post);
		if (disLikeIndex) {
			return toast.error('you already added it to dislike list');
		} else {
			dispatch(actions.removeLike(post.id));
			dispatch(actions.addDisLike(post));
			return toast.success('updated dislike list');
		}
	};

	const likeRemoveHandler = () => {
		dispatch(actions.removeLike(post.id));
		toast.warn('removed from list');
	};

	const disLikeRemoveHandler = () => {
		dispatch(actions.removeDisLike(post.id));
		toast.warn('removed from list');
	};

	return (
		<Grid item key={post.id} xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardContent
					component={Link}
					to={`/posts/${post.id}`}
					className={classes.cardContent}>
					<Typography
						className={classes.title}
						gutterBottom
						variant='h5'
						component='h2'>
						{post.title}
					</Typography>
					<Typography>{post.body}</Typography>
				</CardContent>
				<CardActions
					component={Link}
					to={`/posts/${post.id}`}
					className={classes.cardActions}>
					{like ? (
						<>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<ThumbDownAltTwoToneIcon />}
								onClick={disLikeHandler}>
								dislike
							</Button>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<RemoveCircleTwoToneIcon />}
								onClick={likeRemoveHandler}>
								remove
							</Button>
						</>
					) : disLike ? (
						<>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<ThumbUpAltTwoToneIcon />}
								onClick={likeHandler}>
								Like
							</Button>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<RemoveCircleTwoToneIcon />}
								onClick={disLikeRemoveHandler}>
								remove
							</Button>
						</>
					) : (
						<>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<ThumbUpAltTwoToneIcon />}
								onClick={likeHandler}>
								like
							</Button>
							<Button
								variant='outlined'
								size='small'
								color='inherit'
								startIcon={<ThumbDownAltTwoToneIcon />}
								onClick={disLikeHandler}>
								dislike
							</Button>
						</>
					)}
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Post;
