// Query

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id);
  return user;
};

const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input);
  return users;
};

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.dataLoader.load(id);
};

// Mutation

const createUser = (_, { data }, { dataSources }) => {
  return dataSources.userApi.createUser(data);
};

const updateUser = (_, { userId, data }, { dataSources }) => {
  return dataSources.userApi.updateUser(userId, data);
};

const deleteUser = (_, { userId }, { dataSources }) => {
  return dataSources.userApi.deleteUser(userId);
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
  User: {
    dateSearch: () => {
      const date = new Date();
      return date.toString();
    },
    posts,
  },
};
