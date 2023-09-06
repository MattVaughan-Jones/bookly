import { getUsers } from './queries/getUsers.js';
import { getUser } from './queries/getUser.js';
// import { organisations } from './queries/organisations.js';
// import { organisation } from './queries/organisation.js';

export const resolvers = {
    Query: {
        // services: async () => await Service.findAll(),
        // serviceOrganisation:  async (serviceId) => await Service.findAll({
        //     where: {
        //         id: serviceId
        //     }
        // }),
        // organisations: organisations,
        // organisation(parent, args) { organisation(parent, args) },
        users: getUsers,
        user(parent, args) { return getUser(parent, args) },
        // organisationUsers: async () => await,
        // userOrganisations: async () => await, 
    },
};
