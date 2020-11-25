'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoEntregaSchema extends Schema {
  up () {
    this.create('endereco_entregas', (table) => {
      table.increments()
      table
      .integer('cliente_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('clientes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.bigInteger('cep', 8)
      table.string('bairro', 60)
      table.string('cidade', 60)
      table.string('complemento', 60)
      table.string('uf', 2)
      table.string('Longitude', 40)
      table.string('Latitude', 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('endereco_entregas')
  }
}

module.exports = EnderecoEntregaSchema
