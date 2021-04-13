import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CardsContainer from './Containers/CardsContainer';
import AddPostContainer from './Containers/AddPostContainer';
import EditPostContainer from './Containers/EditPostContainer';
import PostContainer from './Containers/PostContainer';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={CardsContainer} />
      <Route path="/addpost" exact component={AddPostContainer} />
      <Route path="/post/:id" exact component={PostContainer} />
      <Route path="/post/edit/:id" exact component={EditPostContainer} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
