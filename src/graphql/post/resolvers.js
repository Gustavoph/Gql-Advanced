const post = () => {
  return {
    id: '1',
    title: 'How to make navbar with material ui',
  };
};

const posts = () => {
  const postsArray = [
    {
      id: '1',
      title: 'How to make navbar with material ui',
    },
    {
      id: '2',
      title: 'Make a website with reactjs',
    },
  ];

  return postsArray;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
