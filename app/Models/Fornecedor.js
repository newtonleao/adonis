'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
    categoria (){
        return this.belongsTo('App/Models/Categoria')
    }

    endereco_fornecedors() {
        return this.hasOne('App/Models/EnderecoFornecedor')
      }
}

module.exports = Fornecedor
