import DataLoader from 'dataloader';

export const makeuserDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const response = await getUsers('?id=' + urlQuery);
    const users = await response.json();
    return ids.map((id) => users.find((user) => user.id === id));
  });
};
