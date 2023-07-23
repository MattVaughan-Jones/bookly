import { Organisation } from './organisation.js';
import { Service } from './service.js';
import { User } from './user.js';
import { User_Organisation } from './userOrganisationJunction.js';

// Associations
Service.hasOne(Organisation);
Organisation.hasMany(Service);
//User.hasMany(Organisation);

export {
    Service,
    Organisation,
    User,
    User_Organisation
}