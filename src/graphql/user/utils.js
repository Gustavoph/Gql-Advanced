export const getUsers =
  (fetch) =>
  (path = '/') => {
    console.log(`GET /users${path}`);
    return fetch(`${process.env.API_URL}/users${path}`);
  };
