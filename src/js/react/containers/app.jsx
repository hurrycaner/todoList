import React, {Component, Fragment} from 'react';

import FormContainer from '../containers/formContainer';
import FilteredList from './filteredList';
import Filter from '../components/filter';
import {getFilter} from '../../redux/todo/reducers';
import * as filterActions from '../../redux/todo/actions/filter';
import {connect} from 'react-redux';
import {isEnabled} from '../../lib/feature';

class App extends Component {

  render() {
    const enableRenderBottom = isEnabled('renderBottom');
    const enableFilter = isEnabled('filter');
    const enableFilterTop = enableRenderBottom && enableFilter &&
      isEnabled('filterTop');

    const {filter} = this.props;
    return (
      <Fragment>
        {!enableRenderBottom && <FormContainer/>}
        {enableFilterTop &&
        <Filter filter={filter} changeFilter={this.props.changeFilter}/>}
        <FilteredList/>
        {enableRenderBottom && <FormContainer/>}
        {enableFilter && !enableFilterTop &&
        <Filter filter={filter} changeFilter={this.props.changeFilter}/>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filter: getFilter(state),
  state: state,
});
const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(filterActions.changeFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
