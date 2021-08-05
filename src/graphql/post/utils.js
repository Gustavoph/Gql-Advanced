export const getUsers =
  (fetch) =>
  (path = '/') => {
    console.log(`GET /users${path}`);
    return fetch(`${process.env}users${path}`);
  };
