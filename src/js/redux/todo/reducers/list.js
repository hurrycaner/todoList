import {initialState} from '../reducers';
import * as actionTypes from '../constants';

// selectors

export const getFilteredList = (state, filter) => {
  return state.list.items.filter(todo => {
    switch (filter) {
      case 'done':
        return todo.done === true;
      case 'pending':
        return todo.done === false;
      default:
        return true;
    }
  });
};
export const getListLoading = state => state.list.loading;

// reducers

const list = (state = initialState.list, action) => {
  switch (action.type) {
    case actionTypes.LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LIST_LOAD:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case actionTypes.LIST_ITEM_ADD:
      return {
        ...state,
        loading: false,
        items: [
          ...state.items,
          {
            ...action.payload,
            done: false,
          },
        ],
      };
    case actionTypes.LIST_ITEM_TOGGLE:
      return {
        ...state,
        loading: false,
        items: state.items.map(t => {
          if (t.id === action.payload.id)
            t.done = !t.done;
          return t;
        }),
      };
    default:
      return state;
  }
};

export default list;
