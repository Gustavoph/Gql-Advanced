const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts(`/${id}`);
  return post.json();
};

const posts = async (_, { input }, { getPosts }) => {
  const apifilter = new URLSearchParams(input);
  const posts = await getPosts('/?' + apifilter);
  return posts.json();
};

const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    user,
  },
};
