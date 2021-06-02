import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: { maxWidth: '100%', borderRadius: '30px' },
	section: {
		maxWidth: '80%',
		margin: '40px auto',
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '10px',
		background: theme.palette.common.white,
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '10px',
	},
	paper: {
		margin: theme.spacing(4, 0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '88%',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
	},
	submit: {
		margin: theme.spacing(2, 0, 0),
	},
	error: {
		width: '100%',
	},
}));

export default useStyles;
