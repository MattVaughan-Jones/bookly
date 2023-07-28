import { Knex } from 'knex';

export const users = () => {
    return [{
        id: '4da25154-2c4e-11ee-9461-598ebc06e670',
        name: 'name',
        email: 'email',
        password: 'password',
        organisations: [
            {
                id: '4da2dec6-2c4e-11ee-9461-598ebc06e670',
                name: 'orgname'
            }
        ]
    }]
}
