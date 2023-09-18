import { db } from '../../db/index.js';

export const getOrganisation = async (parent, args) => {
    return db('organisation').select('*').where('id', args.id).first();
}
