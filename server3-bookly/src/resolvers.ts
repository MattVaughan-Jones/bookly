import { users } from './queries/users.js';
// import { user } from './queries/user.js';

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
        // user: user,
        // organisationUsers: async () => await,
        // userOrganisations: async () => await, 
    },
};
