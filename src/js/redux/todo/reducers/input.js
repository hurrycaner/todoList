import {initialState} from '../reducers';
import * as actionTypes from '../constants';

// selectors

export const getInputText = state => state.input;

// reducers

const input = (state = initialState.input, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default input;
