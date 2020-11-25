'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedors', (table) => {
      table.increments()
      table
      .integer('categoria_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categorias')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.bigInteger('telephone', 11).notNullable().unique()
      table.bigInteger('cnpj', 14)
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedors')
  }
}

module.exports = FornecedorSchema
