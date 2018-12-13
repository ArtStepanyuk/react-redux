import { connect } from 'react-redux';
import Category from './category';
import { selectLocalCategory } from "../../actions";

const mapDispatchToProps = dispatch => ({
    toggleSelectFilter: id => dispatch(selectLocalCategory(id))
});

export default connect(null, mapDispatchToProps)(Category);