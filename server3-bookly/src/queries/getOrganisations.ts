import { db } from '../../db/index.js';

export const getOrganisations = async () => {
    return await db('organisation').select('*')
}
