const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts(`/${id}`);
  return post.json();
};

const posts = async (_, { input }, { getPosts }) => {
  const apifilter = new URLSearchParams(input);
  const posts = await getPosts('/?' + apifilter);
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
