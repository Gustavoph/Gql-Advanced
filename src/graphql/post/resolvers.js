const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  // if (Math.random() > 0.5) {
  //   return {
  //     statusCode: 404,
  //     message: 'Post not found',
  //     timeout: 123,
  //   };
  // }

  // if (typeof post.id === 'undefined') {
  //   return {
  //     statusCode: 404,
  //     message: 'Post not found',
  //     postId: id,
  //   };
  // }
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  // PostResult: {
  //   __resolveType: (obj) => {
  //     if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
  //     if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
  //     if (typeof obj.id !== 'undefined') return 'Post';
  //     return null;
  //   },
  // },
  // PostError: {
  //   __resolveType: (obj) => {
  //     if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
  //     if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
  //     return null;
  //   },
  // },
};
