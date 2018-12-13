import { compose } from 'redux';
import { connect } from 'react-redux';
import News from '../../components/news';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        paddingBottom: "5px"
    },
    label: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: "white",
        fontWeight: 700
    }
});

const mapStateToProps = state => {
    return {
        worldCategories: state.news.categories.filter(({ type }) => type === 'world'),
        localCategories: state.news.categories.filter(({ type }) => type === 'local'),
    };
};

const enhance = compose(
    connect(mapStateToProps),
    withStyles(styles)
);

export default enhance(News);