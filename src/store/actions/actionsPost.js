/* eslint-disable no-alert */
import postApi from '../../api';
import { CLEAR_ITEM, FETCH_ITEM_SUCCESS, ADD_COMMENT } from './actionTypes';
import { showLoader, showError, hideError, hideLoader } from './actionsApp';

export function fetchItemSuccess(post) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: post
  };
}

export function clearPost() {
  return {
    type: CLEAR_ITEM
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

function addCommentStore(data) {
  return {
    type: ADD_COMMENT,
    data
  };
}

export function addComment(data) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.addComment(data);
    try {
      dispatch(hideLoader());
      dispatch(addCommentStore(data));
      window.alert('Комментарий успешно сохранен!');
    } catch (error) {
      dispatch(hideLoader());
      dispatch(showError(error.message));
    }
  };
}
