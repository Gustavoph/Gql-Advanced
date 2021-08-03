import { gql } from 'apollo-server';

export const filtersTypes = gql`
  input ApiFilters {
    _sort: String
    _order: Order
    _start: Int
    _limit: Int
  }

  enum Order {
    ASC
    DESC
  }
`;
