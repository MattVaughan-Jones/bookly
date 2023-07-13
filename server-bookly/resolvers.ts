import Resolvers from './generated/resolvers-types.ts';

export const resolvers: Resolvers = {
    Organisation: {
      services: (parent, args, context, info) => parent.getServices(),
    },
    Service: {
      organisation: (parent, args, context, info) => parent.getOrganisation(),
    },
    Query: {
      services: (parent, args, { db }, info) => db.service.findAll(),
      organisations: (parent, args, { db }, info) => db.organisation.findAll(),
      service: (parent, { id }, { db }, info) => db.service.findByPk(id),
      organisation: (parent, { id }, { db }, info) => db.organisation.findByPk(id) 
    }
};
