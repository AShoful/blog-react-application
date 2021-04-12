/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import postApi from '../../api';
import {
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEMS_SUCCESS
} from './actionTypes';
import { showLoader, showError, hideError, hideLoader } from './actionsApp';
import { ActionsType, IPosts } from '../../types';

export function fetchItems() {
  return async (dispatch: (arg0: ActionsType) => void) => {
    dispatch(showLoader());
    dispatch(hideError());
    const cards = await postApi.get();
    try {
      dispatch(fetchItemsSuccess(cards.data));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error));
      dispatch(hideLoader());
    }
  };
}

function fetchItemsSuccess(data: IPosts[]): ActionsType {
  return {
    type: FETCH_ITEMS_SUCCESS,
    data
  };
}

export function fetchItem(id: number) {
  return async (dispatch: (arg0: ActionsType) => void) => {
    dispatch(showLoader());
    dispatch(hideError());
    const res = await postApi.getItem(id);
    try {
      const post = res.data;
      dispatch(fetchItemSuccess(post));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchItemSuccess(post: IPosts): ActionsType {
  return {
    type: FETCH_ITEM_SUCCESS,
    data: post
  };
}

export function fetchRemoveItem(id: number) {
  return async (dispatch: (arg0: ActionsType) => void) => {
    await postApi.remove(id);
    try {
      dispatch(removeItem(id));
      window.alert('Пост успешно удален!');
    } catch (error) {
      dispatch(showError(error.message));
    }
  };
}

export function removeItem(id: number): ActionsType {
  return {
    type: FETCH_ITEM_REMOVE,
    id
  };
}

export function fetchPostItem(data: IPosts) {
  return async (dispatch: (arg0: ActionsType) => void) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.post(data);
    try {
      dispatch(hideLoader());
      window.alert('Пост успешно сохранен!');
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showError(error.message));
    }
  };
}

export function fetchPutItem(data: IPosts, id: number) {
  return async (dispatch: (arg0: ActionsType) => void) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.put(data, id);
    try {
      dispatch(hideLoader());
      window.alert('Пост успешно изменен!');
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showError(error.message));
    }
  };
}
