'use strict'

class StoreEnderecoEntrega {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.
    response.status(422).send(errorMessages)
  }

  get rules () {
    return {
      cliente_id: 'required',
    }
  }

  get messages () {
    return {
      'cliente_id.required': 'Cliente obrigatório',
    }
  }
}

module.exports = StoreEnderecoEntrega
