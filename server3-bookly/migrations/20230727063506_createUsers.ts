import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('user', function (table) {
        table.uuid('id').defaultTo(knex.fn.uuid());
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('password', 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
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

