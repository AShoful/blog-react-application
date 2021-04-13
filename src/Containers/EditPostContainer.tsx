/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';
import Error from '../Components/Error';

import { IRootState, IPosts } from '../types';
import { fetchPutItem, fetchItem } from '../store/actions/actionsPosts';

interface IMatchParams {
  id: string;
}

const EditPostContainer = (props: RouteComponentProps<any>): JSX.Element => {
  const { loading, error } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();
  const { id }: IMatchParams = props.match.params;
  const post = useSelector((state: IRootState) => state.posts).filter(
    (post) => post.id === +id
  );

  const fetchPost = (data: IPosts, id: number) =>
    dispatch(fetchPutItem(data, id));

  React.useEffect(() => {
    if (!post.length) {
      dispatch(fetchItem(+id));
    }
  }, [dispatch, post.length, id]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <TextFields
      handleSubmitFetch={fetchPost}
      post={post[0]}
      postId={+id}
      loading={loading}
    />
  );
};

export default withRouter(EditPostContainer);
