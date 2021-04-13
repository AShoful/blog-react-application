import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';
import { fetchPostItem } from '../store/actions/actionsPosts';
import { IRootState, IPosts } from '../types';

const AddPostContainer = (): JSX.Element => {
  const { loading } = useSelector((state: IRootState) => state.app);
  const dispatch = useDispatch();
  const fetchItem = (data: IPosts) => dispatch(fetchPostItem(data));
  return <TextFields handleSubmitFetch={fetchItem} loading={loading} />;
};

export default AddPostContainer;
