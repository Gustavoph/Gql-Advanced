const user = async (_, { id }, { getUsers }) => {
  const user = await getUsers(`/${id}`);
  return user.json();
};

const users = async (_, { input }, { getUsers }) => {
  const apifilter = new URLSearchParams(input);
  const users = await getUsers('/?' + apifilter);
  return users.json();
};

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.dataLoader.load(id);
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
    posts,
  },
};
