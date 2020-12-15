'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('status', 20)
      table.string('formaPagamento', 20)
      table.string('observacao', 60)  
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema
