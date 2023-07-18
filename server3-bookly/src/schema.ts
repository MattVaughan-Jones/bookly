import { gql } from 'graphql-tag';

export const typeDefs = gql`#graphql
  type Service {
    id: ID
    name: String
    price: Float
  }

  type Query {
    services: [Service]
    service(id: ID): Service
  }
`;
