import { Service } from './database/models/serviceModel.js';

export const resolvers = {
    Query: {
        services: async () => await Service.findAll()
    },
};
