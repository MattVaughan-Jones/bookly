import { gql } from 'graphql-tag';

export const typeDefs = gql`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This type defines the queryable fields for every service in our data source.
  type Service {
    name: String
    price: Float
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "services" query returns an array of zero or more Services (defined above).
  type Query {
    services: [Service]
  }
`;
