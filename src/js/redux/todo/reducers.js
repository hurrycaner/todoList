import {combineReducers} from 'redux';

import input, * as fromInput from './reducers/input';
import list, * as fromList from './reducers/list';
import filter, * as fromFilter from './reducers/filter';

// state

export const initialState = {
  input: '',
  list: {
    loading: false,
    items: [],
  },
  filter: 'all',
};

// reducers

export default combineReducers({
  input,
  list,
  filter,
});

// selectors

export const getFilter = state => fromFilter.getFilter(state);
export const getInputText = state => fromInput.getInputText(state);
export const getListLoading = state => fromList.getListLoading(state);
export const getFilteredList = state => (
  fromList.getFilteredList(state, getFilter(state))
);
