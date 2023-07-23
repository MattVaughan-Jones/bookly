import { Service, Organisation, User } from './database/models/index.js';

export const resolvers = {
    Query: {
        services: async () => await Service.findAll(),
        serviceOrganisation:  async (serviceId) => await Service.findAll({
            where: {
                id: serviceId
            }
        }),
        organisations: async () => await Organisation.findAll(),
        users: async () => await User.findAll(),
        // organisationUsers: async () => await,
        // userOrganisations: async () => await,
    },
};
