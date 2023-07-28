import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user").del();
    await knex("organisation").del();
    await knex("userOrganisation").del();
    const user1Id = knex.fn.uuid();
    const user2Id = knex.fn.uuid()
    const org1Id = knex.fn.uuid();
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
