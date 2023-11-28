import { db } from '../../db/index.js';

export const getUser = async (parent, args) => {
    return db('user').select('*').where('id', args.id).first();
}
