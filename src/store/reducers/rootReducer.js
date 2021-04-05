import { combineReducers } from 'redux';

import posts from './posts';
import app from './app';
import post from './post';

export default combineReducers({
  posts,
  app,
  post
});
