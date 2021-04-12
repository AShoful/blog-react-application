/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  SHOW_LOADER,
  SHOW_ERROR,
  HIDE_LOADER,
  HIDE_ERROR
} from '../actions/actionTypes';

import { ActionsType } from '../../types';

const initialState = {
  loading: false,
  error: null
};

export default function(state = initialState, action: ActionsType) {
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
