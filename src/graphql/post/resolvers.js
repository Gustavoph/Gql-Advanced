const post = async (_, { id }, { dataSources }) => {
  const post = await dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = await dataSources.postApi.getPosts(input);
  return posts;
};

const user = async (post, _, { userDataLoader }) => {
  const { userId } = post;
  return userDataLoader.load(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
