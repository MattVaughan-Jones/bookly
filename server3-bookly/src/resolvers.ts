import { Service } from './database/models/service.js';

export const resolvers = {
    Query: {
        services: async () => await Service.findAll()
    },
};
