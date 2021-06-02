import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	flex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		flexDirection: 'column',
		margin: '100px auto',
		backgroundColor: theme.palette.primary.dark,
		color: '#fff',
		textAlign: 'center',
		padding: theme.spacing(5, 0, 3),
		borderRadius: theme.spacing(1),
	},
}));
export default useStyles;
