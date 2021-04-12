/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import {
  FETCH_POST_SUCCESS,
  CLEAR_POST,
  ADD_COMMENT
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return { ...action.payload };
    case ADD_COMMENT:
      state.comments.push(action.data);
      return { ...state };
    case CLEAR_POST:
      return {};
    default:
      return state;
  }
}
