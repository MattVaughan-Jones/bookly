import { getUsers } from './queries/getUsers.js';
import { getUser } from './queries/getUser.js';
import { getOrganisations } from './queries/getOrganisations.js';
import { getOrganisation } from './queries/getOrganisation.js';


export const resolvers = {
    Query: {
        // services: async () => await Service.findAll(),
        // serviceOrganisation:  async (serviceId) => await Service.findAll({
        //     where: {
        //         id: serviceId
        //     }
        // }),
        organisations: getOrganisations,
        organisation(parent, args) { return getOrganisation(parent, args) },
        users: getUsers,
        user(parent, args) { return getUser(parent, args) },
        // userOrganisations: async () => await, 
    },
};
