import { connect } from 'react-redux';
import Item from '../../components/news/item';

const mapStateToProps = (state, { data: { id, type } }) => {
    let selectedItem;

    if(type === 'world') {
        selectedItem = state.news.selectedWorldCategory
    } else {
        selectedItem = state.news.selectedLocalCategory
    }

    return {
        selected: selectedItem.includes(id)
    };
};

export default connect(mapStateToProps)(Item);