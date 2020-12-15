'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EnderecoFornecedor extends Model {
    fornecedors (){
        return this.belongsTo('App/Models/Fornecedor')
    }
}

module.exports = EnderecoFornecedor
