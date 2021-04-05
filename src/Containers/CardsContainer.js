/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import PostList from '../Components/PostsList';
import Sceleton from '../Components/Sceleton';
import Error from '../Components/Error';

import { fetchItems, fetchRemoveItem } from '../store/actions/actionsPosts';

const CardsContainer = () => {
  const posts = useSelector((state) => state.posts);
  const { loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(fetchRemoveItem(id));

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {!loading ? (
        posts.map((item) => (
          // check
          <PostList key={item.id} item={item} remove={removeItem} />
        ))
      ) : (
        <Sceleton />
      )}
    </Container>
  );
};

export default CardsContainer;
