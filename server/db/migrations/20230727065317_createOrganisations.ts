import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('organisation', function (table: Knex.TableBuilder) {
        table.uuid('id').primary().unique().defaultTo(knex.fn.uuid());
        table.string('name', 255).notNullable();
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable("organisation");
}

