import axios from '../axios';

export default {
  get: () => axios.get(`/posts`),
  getItem: (id) => axios.get(`/posts/${id}?_embed=comments`),
  remove: (id) => axios.delete(`/posts/${id}`),
  addComment: (data) => axios.post('/comments', data),
  post: (data) => axios.post('/posts', data),
  put: (data, id) => axios.put(`/posts/${id}`, data)
};
