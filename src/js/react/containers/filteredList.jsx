import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  getFilter,
  getFilteredList,
  getListLoading,
} from '../../redux/todo/reducers';

import List from '../components/list';
import * as listActions from '../../redux/todo/actions/list';

class FilteredList extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadList();
  }

  render() {
    const {list, loading, toggleItem} = this.props;
    return (
      <List list={list} loading={loading} toggleItem={toggleItem}/>
    );
  }
}

const mapStateToProps = state => ({
  list: getFilteredList(state, getFilter(state)),
  loading: getListLoading(state),
});
const mapDispatchToProps = dispatch => ({
  loadList: () => dispatch(listActions.loadList()),
  toggleItem: (id) => dispatch(listActions.toggleItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilteredList);
