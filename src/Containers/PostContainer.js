/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import CardPost from '../Components/CardPost';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { clearPost, fetchItem, addComment } from '../store/actions/actionsPost';

const PostContainer = (props) => {
  const { id } = props.match.params;
  const { loading, error } = useSelector((state) => state.app);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItem(id));
    return () => dispatch(clearPost());
  }, [id, dispatch]);

  const comment = (data) => dispatch(addComment(data));

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {loading || !Object.keys(post).length ? (
        <Sceleton count={1} />
      ) : (
        <CardPost post={post} addComment={comment} />
      )}
    </Container>
  );
};

PostContainer.propTypes = {
  match: PropTypes.object
};

PostContainer.defaultProps = {
  match: {}
};

export default withRouter(PostContainer);
