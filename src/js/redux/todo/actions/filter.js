import {FILTER_CHANGE} from '../constants';

export const changeFilter = filter => ({
  type: FILTER_CHANGE,
  filter,
});
