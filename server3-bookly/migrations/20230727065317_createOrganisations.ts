import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('organisation', function (table) {
        table.uuid('id').defaultTo(knex.fn.uuid());
        table.string('name', 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable("organisation");
}

