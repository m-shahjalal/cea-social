import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	input: {
		margin: '40px auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		width: '300px',
		background: theme.palette.primary.light,
		borderRadius: '5px',
	},
	bottom: {
		margin: theme.spacing(4, 'auto'),
		textAlign: 'center',
		fontSize: theme.spacing(4),
		marginTop: theme.spacing(4),
		color: theme.palette.common.white,
	},
}));
export default useStyles;
