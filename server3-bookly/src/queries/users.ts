import { db } from '../../db/index.js';

export const users = async () => {
    // return await db('user').select('*');

    return [{
        id: "0a188c85-c668-49d6-8dc6-8d6280b92c84",
        name: 'name',
        email: 'email',
        password: 'password',
        created_at: 'now',
        updated_at: 'now'
    }]
}
