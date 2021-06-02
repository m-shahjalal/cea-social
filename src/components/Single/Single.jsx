import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	CardActions,
	CardContent,
	Container,
	Typography,
} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import useStyles from './styles';
import api from '../../api/post';
import actions from '../../store/post/action';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Single = () => {
	const classes = useStyles();
	const { id } = useParams();
	const dispatch = useDispatch();
	const state = useSelector((state) => state.post);
	const item = state.post.find((item) => item.id === parseInt(id));
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const deleteHandler = () => {
		setLoading(true);
		dispatch(actions.deletePost(item.id));
		api.deletePost(item.id)
			.then((response) => {
				setLoading(false);
				toast.success('Delete post successfully');
				history.push('/');
			})
			.catch((error) => {
				toast.error('api error occurred: ' + error.message);
			});
	};
	return (
		<Container>
			{item ? (
				<div className={classes.flex}>
					<CardContent>
						<Typography variant='h4' gutterBottom>
							{item.title}
						</Typography>
						<Typography gutterBottom>{item.body}</Typography>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button
							variant='outlined'
							size='small'
							color='inherit'
							onClick={deleteHandler}
							startIcon={!loading && <DeleteSweepTwoToneIcon />}>
							{loading ? 'deleting...' : 'delete'}
						</Button>
						<Button
							component={Link}
							to={{
								pathname: `/posts/${item.id}/edit`,
								state: item,
							}}
							variant='outlined'
							size='small'
							startIcon={<EditOutlinedIcon />}
							color='inherit'>
							Edit
						</Button>
					</CardActions>
				</div>
			) : (
				<Typography
					style={{ margin: '50px auto', textAlign: 'center' }}
					variant='h3'
					gutterBottom>
					loading...
				</Typography>
			)}
		</Container>
	);
};

export default Single;
