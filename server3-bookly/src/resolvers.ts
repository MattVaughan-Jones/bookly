import { users } from './queries/users.js';

export const resolvers = {
    Query: {
        // services: async () => await Service.findAll(),
        // serviceOrganisation:  async (serviceId) => await Service.findAll({
        //     where: {
        //         id: serviceId
        //     }
        // }),
        // organisations: async () => await Organisation.findAll(),
        users: users,
        // organisationUsers: async () => await,
        // userOrganisations: async () => await, 
    },
};
