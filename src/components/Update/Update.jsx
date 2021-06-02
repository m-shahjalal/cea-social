import {
	Box,
	Button,
	LinearProgress,
	TextField,
	Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import api from '../../api/post';
import useStyles from './styles';

const Update = () => {
	const classes = useStyles();
	const history = useHistory();
	const { state } = useLocation();
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	if (!state) {
		history.push('/');
	}

	const [values, setValues] = useState({
		title: state ? state.title : null,
		body: state ? state.body : null,
	});

	const changeHander = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setSuccess(false);
		setLoading(true);
		api.updatePost(1, values)
			.then((res) => {
				console.log(res.data);
				setLoading(false);
				setSuccess(true);
				setValues({ title: '', body: '' });
				toast.success('Data Updated Success');
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<Box className={classes.center}>
			<div className={classes.paper}>
				<Typography component='h1' variant='h4'>
					Write a post!
				</Typography>

				<form
					className={classes.form}
					onSubmit={submitHandler}
					noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='title'
						label='Post title'
						name='title'
						onChange={changeHander}
						value={values.title}
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='body'
						label='Post content'
						type='text'
						id='body'
						onChange={changeHander}
						value={values.body}
						multiline
						rows={12}
					/>
					{loading && <LinearProgress color='secondary' />}
					{success && (
						<Typography
							color='textPrimary'
							style={{ textAlign: 'center' }}>
							Data updated successfully
						</Typography>
					)}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						Update now
					</Button>
				</form>
			</div>
		</Box>
	);
};

export default Update;
