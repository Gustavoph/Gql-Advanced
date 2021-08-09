const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postApi.getPosts(input);
  return posts;
};

const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Mutation: {
    createPost,
  },
  Post: {
    user,
  },
};
