import axios from '../axios';
import { IComment, IPosts } from '../types';

export default {
  get: () => axios.get(`/posts`),
  getItem: (id: number) => axios.get(`/posts/${id}?_embed=comments`),
  remove: (id: number) => axios.delete(`/posts/${id}`),
  addComment: (data: IComment) => axios.post('/comments', data),
  post: (data: IPosts) => axios.post('/posts', data),
  put: (data: IPosts, id: number) => axios.put(`/posts/${id}`, data)
};
