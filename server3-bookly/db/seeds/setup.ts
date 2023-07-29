import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user").del();
    await knex("organisation").del();
    await knex("userOrganisation").del();
    
    const user1Id = uuidv4();
    const user2Id = uuidv4();
    const org1Id = uuidv4();

    // Inserts seed entries
    await knex("user").insert([
        { id: user1Id, name: 'user1', email: 'email1@mail.com', password: 'password1' },
        { id: user2Id, name: 'user2', email: 'email2@mail.com', password: 'password2' },
    ]);
    await knex("organisation").insert([
        { id: org1Id, name: 'org1' },
    ]);
    await knex("userOrganisation").insert([
        { user_id: user1Id, organisation_id: org1Id },
        { user_id: user2Id, organisation_id: org1Id },
    ]);
};
