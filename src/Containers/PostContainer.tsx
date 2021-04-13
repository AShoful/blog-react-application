/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Container } from '@material-ui/core';
import CardPost from '../Components/CardPost';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';
import { IRootState, IComment } from '../types';
import { fetchPost, addComment } from '../store/actions/actionsPost';

interface IMatchParams {
  id: string;
}

const PostContainer = (props: RouteComponentProps<any>): JSX.Element => {
  const { id }: IMatchParams = props.match.params;
  const { loading, error } = useSelector((state: IRootState) => state.app);
  const post = useSelector((state: IRootState) => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPost(+id));
  }, [id, dispatch]);

  // React.useEffect(() => {
  //   return () => dispatch(clearPost());
  // });

  const commentPost = (data: IComment) => dispatch(addComment(data));

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {loading || !Object.keys(post).length ? (
        <Sceleton count={1} />
      ) : (
        <CardPost post={post} addComment={commentPost} />
      )}
    </Container>
  );
};

export default withRouter(PostContainer);
