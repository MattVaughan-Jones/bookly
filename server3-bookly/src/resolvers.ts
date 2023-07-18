import { Service } from './database/models/serviceModel.js';

export const resolvers = {
    Query: {
        // services: () => [
        //     {
        //     id: '1',
        //     name: 'mens haircut',
        //     price: 20.00,
        //     },
        //     {
        //     id: '2',
        //     name: 'womens haircut',
        //     price: 50.00,
        //     },
        // ],
        services: async () => await Service.findAll()
    },
};
