const user = () => {
  return {
    id: '52-dsa1232-231',
    userName: 'Gustavo Oliveira',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Gustavo Oliveira',
    },
    {
      id: '2',
      userName: 'Giovanna Alcini',
    },
    {
      id: '3',
      userName: 'Murilo Tinassi',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
