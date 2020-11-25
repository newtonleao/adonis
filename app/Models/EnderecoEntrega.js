'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EnderecoEntrega extends Model {
    clientes (){
        return this.belongsTo('App/Models/Cliente')
    }
}

module.exports = EnderecoEntrega
