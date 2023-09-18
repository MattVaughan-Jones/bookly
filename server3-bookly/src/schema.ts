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
    created_at: String
    updated_at: String
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
    created_at: String
    updated_at: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    organisations: [Organisation]
    organisation(id: ID!): Organisation
    organisationUsers: [User]
  }
`;
