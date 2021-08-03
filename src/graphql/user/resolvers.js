const user = async (_, { id }, { getUsers }) => {
  const user = await getUsers(`/${id}`);
  return user.json();
};

const users = async (_, { input }, { getUsers }) => {
  const apifilter = new URLSearchParams(input);
  const users = await getUsers('/?' + apifilter);
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: {
    dateSearch: () => {
      const date = new Date();
      return date.toString();
    },
  },
};
