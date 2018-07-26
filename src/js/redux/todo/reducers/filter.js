import {initialState} from '../reducers'
import * as actionTypes from '../constants';

// selectors

export const getFilter = state => state.filter;

// reducers

const filter = (state = initialState.filter, action) => {
  switch (action.type) {
    case actionTypes.FILTER_CHANGE:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
