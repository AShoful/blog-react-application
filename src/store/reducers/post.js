/* eslint-disable no-param-reassign */
import {
  FETCH_ITEM_SUCCESS,
  CLEAR_ITEM,
  ADD_COMMENT
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ITEM_SUCCESS:
      return { ...action.payload };
    case ADD_COMMENT:
      state.comments.push(action.data);
      return { ...state };
    case CLEAR_ITEM:
      return {};
    default:
      return state;
  }
}
