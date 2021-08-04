const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  const post = await response.json();

  if (typeof post.id === 'undefined' && id > 1000) {
    return {
      statusCode: 404,
      message: 'Post not Found',
      info: 'id greater than 10',
    };
  }

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not Found',
      postId: id,
    };
  }

  return post;
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
  PostResult: {
    __resolveType: (obj) => {
      console.log('OBJ 1:', obj);
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.info !== 'undefined') return 'PostNotFoundId';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      console.log('OBJ 2:', obj);
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.info !== 'undefined') return 'PostNotFoundId';
      return null;
    },
  },
};
