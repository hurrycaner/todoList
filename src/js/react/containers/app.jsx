import React, {Component, Fragment} from 'react';

import FormContainer from '../containers/formContainer';
import FilteredList from './filteredList';
import Filter from '../components/filter';
import {getFilter} from '../../redux/todo/reducers';
import * as filterActions from '../../redux/todo/actions/filter';
import {connect} from 'react-redux';

class App extends Component {

  isEnabled(name) {
    return window.location.hash.split('#').includes(name);
  }

  render() {
    const enableRenderBottom = this.isEnabled('renderBottom');
    const enableFilter = this.isEnabled('filter');
    const enableFilterTop = enableRenderBottom &&
      enableFilter &&
      this.isEnabled('filterTop');

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
