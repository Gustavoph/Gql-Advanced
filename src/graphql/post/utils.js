export const getPosts =
  (fetch) =>
  (path = '/') => {
    console.log(`GET /posts${path}`);
    return fetch(`${process.env.API_URL}/posts${path}`);
  };
