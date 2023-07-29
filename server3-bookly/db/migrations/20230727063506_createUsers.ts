import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('user', function (table: Knex.TableBuilder) {
        table.uuid('id').primary().unique().defaultTo(knex.fn.uuid());
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('password', 255).notNullable();
        table.timestamps(true, true)
    })
    // .createTable('products', function (table) {
    //     table.increments('id');
    //     table.decimal('price').notNullable();
    //     table.string('name', 1000).notNullable();
    // });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable("user");
}

