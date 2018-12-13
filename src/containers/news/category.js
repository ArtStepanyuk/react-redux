import Category from '../../components/news/category';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },

    title: {
        color: "white",
        paddingLeft: `40px`
    }
});

export default withStyles(styles)(Category);