// Queries
const post = async (_, { id }, { dataSources }) => {
  const post = await dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = await dataSources.postApi.getPosts(input);
  return posts;
};

// Mutations
const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};

// Field resolvers
const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userApi.batchLoadById(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost },
  Post: { user },
};
