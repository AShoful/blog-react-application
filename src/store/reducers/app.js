import {
  SHOW_LOADER,
  SHOW_ERROR,
  HIDE_LOADER,
  HIDE_ERROR
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: action.error };
    case HIDE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
