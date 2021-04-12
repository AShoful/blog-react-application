/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  SHOW_ERROR,
  SHOW_LOADER,
  HIDE_ERROR,
  HIDE_LOADER
} from './actionTypes';
import { ActionsType } from '../../types';

export function showLoader(): ActionsType {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader(): ActionsType {
  return {
    type: HIDE_LOADER
  };
}

export function showError(error: string): ActionsType {
  return {
    type: SHOW_ERROR,
    error
  };
}

export function hideError(): ActionsType {
  return {
    type: HIDE_ERROR
  };
}
