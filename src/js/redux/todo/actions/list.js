import {
  LIST_LOAD,
  LIST_ITEM_ADD,
  LIST_ITEM_TOGGLE,
  LIST_REQUEST, INPUT_CHANGE,
} from '../constants';
import Api from '../api';

export const loadList = () => {
  return dispatch => {
    dispatch({type: LIST_REQUEST});
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Api.getTodos());
      }, 1000);
    }).then(response => {
      dispatch({
        type: LIST_LOAD,
        payload: {
          items: response,
        },
      });
    });
  };
};

export const addItem = (text) => {
  return dispatch => {
    dispatch({type: LIST_REQUEST});
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Api.addTodo(text));
      }, 1000);
    }).then(response => {
      dispatch({
        type: LIST_ITEM_ADD,
        payload: {
          id: response.id,
          text: response.text,
        },
      });
      dispatch({
        type: INPUT_CHANGE, payload: ''
      });
    });
  };
};

export const toggleItem = (id) => {
  return dispatch => {
    dispatch({type: LIST_REQUEST});
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Api.toggleTodo(id));
      }, 1000);
    }).then(response => {
      dispatch({
        type: LIST_ITEM_TOGGLE,
        payload: {
          id: response.id,
        },
      });
    });
  };
};
