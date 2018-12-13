import { connect } from 'react-redux';
import Category from './category';
import { selectWorldCategory } from "../../actions";

const mapDispatchToProps = dispatch => ({
    toggleSelectFilter: id => dispatch(selectWorldCategory(id))
});

export default connect(null, mapDispatchToProps)(Category);