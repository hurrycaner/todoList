import {INPUT_CHANGE} from '../constants';

export const changeInput = text => ({
  type: INPUT_CHANGE,
  payload: text,
});
