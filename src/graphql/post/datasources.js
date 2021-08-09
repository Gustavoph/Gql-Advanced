import { RESTDataSource } from 'apollo-datasource-rest';
import { createPostFn } from './utils/posts-repositories';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.API_URL}/posts/`;
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams);
  }

  async getPost(id) {
    return this.get(id);
  }

  async createPost(postData) {
    return createPostFn(postData, this);
  }
}
