import Layout from '../components/layout';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: "50px"
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    }
});

export default withStyles(styles)(Layout);