import {
  SHOW_ERROR,
  SHOW_LOADER,
  HIDE_ERROR,
  HIDE_LOADER
} from './actionTypes';

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    error
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR
  };
}
