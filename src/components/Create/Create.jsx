import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useState } from 'react';
import api from '../../api/post';
import useStyles from './styles';

const Create = () => {
	const classes = useStyles();
	const [values, setValues] = useState({ title: '', body: '' });
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const changeHander = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		api.createPost(values)
			.then((res) => {
				console.log(res.data);
				setSuccess(true);
				setLoading(false);
			})
			.catch((err) => console.log(err.message));
		setLoading(true);
	};

	return (
		<div className={classes.section}>
			<Grid container component='main' className={classes.root}>
				<Grid
					item
					xs={12}
					sm={12}
					md={7}
					lg={6}
					component={Paper}
					className={classes.center}
					square>
					<div className={classes.paper}>
						<Typography component='h1' variant='h4'>
							Write a post!
						</Typography>
						<form className={classes.form} onSubmit={submitHandler}>
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
								className={classes.input}
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
								className={classes.input}
							/>

							{loading && <LinearProgress color='secondary' />}
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								startIcon={<PostAddIcon />}
								className={classes.submit}>
								Post Now
							</Button>
						</form>
						{success && (
							<Typography color='secondary'>
								Data created successfully
							</Typography>
						)}
					</div>
				</Grid>
				<Grid item sm={false} md={5} lg={6} className={classes.image} />
			</Grid>
		</div>
	);
};

export default Create;
