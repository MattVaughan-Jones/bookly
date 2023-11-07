import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('userOrganisation', function (table: Knex.TableBuilder) {
        table.uuid('user_id').references('id').inTable('user');
        table.uuid('organisation_id').references('id').inTable('organisation');
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable("userOrganisation");
}

