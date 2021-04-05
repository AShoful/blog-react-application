import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';

import { fetchPostItem } from '../store/actions/actionsPosts';

const AddPostContainer = () => {
  const { loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const fetchItem = (data) => dispatch(fetchPostItem(data));
  return <TextFields handleSubmitFetch={fetchItem} loading={loading} />;
};

export default AddPostContainer;
