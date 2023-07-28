import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('userOrganisation', function (table) {
        table.uuid('user_id');
        table.uuid('organisation_id');
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable("userOrganisation");
}

