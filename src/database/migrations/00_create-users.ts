import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password');
        table.string('avatar');
        table.string('whatsapp');
        table.string('bio');
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

export async function down(knex: Knex) {
    // Utilizado caso de algo de errado
    return knex.schema.dropTable('users');
}