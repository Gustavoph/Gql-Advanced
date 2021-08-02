import fetch from 'node-fetch';

const user = async () => {
  return {
    id: '1',
    userName: 'Gustavo',
  };
};

const users = async () => {
  const users = await fetch('http://localhost:3004/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
