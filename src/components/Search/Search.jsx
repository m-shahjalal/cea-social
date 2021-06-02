import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import useStyles from './styles';

const Search = () => {
	const classes = useStyles();
	const state = useSelector((state) => state.post.post);
	const [value, setValue] = useState('');
	const [posts, setPosts] = useState([]);

	const changeHander = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (value !== '') {
			const searchedList = state.filter((item) =>
				Object.values(item)
					.join(' ')
					.toLowerCase()
					.includes(value.toLowerCase())
			);
			setPosts(searchedList);
		}
	}, [value, state]);
	return (
		<>
			<TextField
				id='filled-search'
				label='Search posts'
				type='search'
				variant='filled'
				className={classes.input}
				onChange={changeHander}
				value={value}
			/>
			<Container className={classes.cardGrid} maxWidth='md'>
				<Grid container spacing={2}>
					{posts.length > 0 ? (
						posts.map((item) => <Post post={item} key={item.id} />)
					) : value !== '' ? (
						<Typography className={classes.bottom}>
							There is no search results
						</Typography>
					) : (
						<Typography className={classes.bottom}>
							Type something to search
						</Typography>
					)}
				</Grid>
			</Container>
		</>
	);
};

export default Search;
