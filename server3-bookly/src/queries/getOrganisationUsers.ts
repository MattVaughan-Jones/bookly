import { db } from '../../db/index.js';

export const getOrganisationUsers = async (parent, args) => {
    // return db('organisation').select('*').where('id', args.id).first();
    console.log(db('user').join('userOrganisation', 'userOrganisation.userId' = '0a188c85-c668-49d6-8dc6-8d6280b92c84'));
}
