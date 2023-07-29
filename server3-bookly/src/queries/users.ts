import { db } from '../../db/index.js';

export const users = async () => {
    return await db('user').select('*');
}
