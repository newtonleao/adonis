'use strict'

class StoreCategoria {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.
    response.status(422).send(errorMessages)
  }
  get rules () {
    return {
      descricao: 'required|unique:categorias',
    }
  }

  get messages () {
    return {
      'descricao.required': 'Descrição obrigatória.',
      'descricao.unique': 'Esta categgoria já foi registrada.',
    }
  }
}

module.exports = StoreCategoria
