import { RESTDataSource } from 'apollo-datasource-rest';
import {
  createUserFn,
  deleteUserFn,
  updateUserFn,
} from './utils/users-repositories';

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.API_URL}/users/`;
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getUser(userId) {
    return this.get(userId, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  async createUser(data) {
    return createUserFn(data, this);
  }

  async updateUser(userId, data) {
    return updateUserFn(userId, data, this);
  }

  async deleteUser(userId) {
    return deleteUserFn(userId, this);
  }
}
