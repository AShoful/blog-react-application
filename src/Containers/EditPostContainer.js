/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';
import Error from '../Components/Error';

import { fetchPutItem, fetchItem } from '../store/actions/actionsPosts';

const EditPostContainer = ({ match }) => {
  const { loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const postId = +match.params.id;
  const post = useSelector((state) => state.posts).filter(
    (post) => post.id === postId
  );

  console.log(postId);

  const fetchPost = (data, id) => dispatch(fetchPutItem(data, id));

  React.useEffect(() => {
    if (!post.length) {
      dispatch(fetchItem(postId));
    }
  }, [dispatch, post.length, postId]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <TextFields
      handleSubmitFetch={fetchPost}
      post={post[0]}
      postId={postId}
      loading={loading}
    />
  );
};

export default withRouter(EditPostContainer);
