/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
import postApi from '../../api';
import { CLEAR_POST, FETCH_POST_SUCCESS, ADD_COMMENT } from './actionTypes';
import { showLoader, showError, hideError, hideLoader } from './actionsApp';
import { ActionsType, IPost, IComment } from '../../types';

function fetchPostSuccess(post: IPost): ActionsType {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post
  };
}

export function clearPost(): ActionsType {
  return {
    type: CLEAR_POST
  };
}

export function fetchPost(id: number) {
  return async (dispatch: (arg0: ActionsType) => void) => {
    dispatch(showLoader());
    dispatch(hideError());
    const res = await postApi.getItem(id);
    try {
      const post = res.data;
      dispatch(fetchPostSuccess(post));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}

function addCommentStore(data: IComment): ActionsType {
  return {
    type: ADD_COMMENT,
    data
  };
}

export function addComment(data: IComment) {
  return async (dispatch: (arg0: ActionsType) => void) => {
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
