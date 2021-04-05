/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import postApi from '../../api';
import {
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEMS_SUCCESS
} from './actionTypes';
import { showLoader, showError, hideError, hideLoader } from './actionsApp';

export function fetchItems() {
  return async (dispatch) => {
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

export function fetchItemsSuccess(data) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    data
  };
}

export function fetchItem(id) {
  return async (dispatch) => {
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

export function fetchItemSuccess(post) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: post
  };
}

export function fetchRemoveItem(id) {
  return async (dispatch) => {
    await postApi.remove(id);
    try {
      dispatch(removeItem(id));
      window.alert('Пост успешно удален!');
    } catch (error) {
      dispatch(showError(error.message));
    }
  };
}

export function removeItem(id) {
  return {
    type: FETCH_ITEM_REMOVE,
    payload: id
  };
}

export function fetchPostItem(data) {
  return async (dispatch) => {
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

export function fetchPutItem(data, id) {
  return async (dispatch) => {
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
