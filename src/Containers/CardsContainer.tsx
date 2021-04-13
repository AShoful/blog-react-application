/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import PostList from '../Components/PostsList';
import Sceleton from '../Components/Sceleton';
import Error from '../Components/Error';

import { IRootState } from '../types';
import { fetchItems, fetchRemoveItem } from '../store/actions/actionsPosts';

const CardsContainer = (): JSX.Element => {
  const posts = useSelector((state: IRootState) => state.posts);
  const { loading, error } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();

  const removeItem = (id: number) => dispatch(fetchRemoveItem(id));

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {!loading ? (
        posts.map((post) => (
          // check
          <PostList key={post.id} post={post} remove={removeItem} />
        ))
      ) : (
        <Sceleton count={3} />
      )}
    </Container>
  );
};

export default CardsContainer;
