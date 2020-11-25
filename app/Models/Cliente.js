'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    
    endereco_entregas() {
        return this.hasOne('App/Models/EnderecoEntrega')
      }
}

module.exports = Cliente
