'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    fornecedors() {
        return this.hasMany('App/Models/Fornecedor')
      }
}

module.exports = Categoria
