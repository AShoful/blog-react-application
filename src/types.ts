import {
  SHOW_ERROR,
  SHOW_LOADER,
  HIDE_ERROR,
  HIDE_LOADER,
  CLEAR_POST,
  ADD_COMMENT,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEM_SUCCESS,
  FETCH_POST_SUCCESS
} from './store/actions/actionTypes';

//  ---- state -----

export interface IPosts {
  id?: number;
  title: string;
  body: string;
}

export interface IApp {
  loading: boolean;
  error: null | string;
}

export interface IComment {
  body: string;
  postId?: number;
}

export interface IPost {
  id?: number;
  title?: string;
  body?: string;
  comments: IComment[];
}

export interface IRootState {
  posts: IPosts[];
  app: IApp;
  post: IPost;
}

//  ---- action ----

// ----app----

interface IShowLoader {
  type: typeof SHOW_LOADER;
}

interface IHideLoader {
  type: typeof HIDE_LOADER;
}

interface IShowError {
  type: typeof SHOW_ERROR;
  error: string;
}

interface IHideError {
  type: typeof HIDE_ERROR;
}

// -----posts------

interface IFetchItemsSuccess {
  type: typeof FETCH_ITEMS_SUCCESS;
  data: IPosts[];
}

interface IFetchItemSuccess {
  type: typeof FETCH_ITEM_SUCCESS;
  data: IPosts;
}

interface IFetchRemoveItem {
  type: typeof FETCH_ITEM_REMOVE;
  id: number;
}

// ----post----

interface IClearPost {
  type: typeof CLEAR_POST;
}

interface IFetchPostSuccess {
  type: typeof FETCH_POST_SUCCESS;
  payload: IPost;
}

interface IAddCommentStore {
  type: typeof ADD_COMMENT;
  data: IComment;
}

export type ActionsType =
  | IShowError
  | IShowLoader
  | IHideError
  | IHideLoader
  | IFetchItemsSuccess
  | IFetchItemSuccess
  | IFetchRemoveItem
  | IClearPost
  | IFetchPostSuccess
  | IAddCommentStore;
