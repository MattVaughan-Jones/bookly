import { gql } from 'graphql-tag';

export const typeDefs = gql`#graphql
  type Service {
    id: ID
    name: String
    price: Float
  }

  type Organisation {
    id: ID
    name: String
    users: [User!]!
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
    organisations: [Organisation!]!
  }

  type Query {
    services: [Service]
    service(id: ID): Service
    serviceOrganisation(id: ID): [Organisation]
    organisations: [Organisation]
    users: [User]
  }
`;
