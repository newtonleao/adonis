'use strict'

class StoreCliente {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }
  get rules () {
    return {
      email: 'required|email|unique:clientes',
      name: 'required',
      telephone: 'required|unique:clientes'
    }
  }

  get messages () {
    return {
      'email.required': 'E-mail obrigatório.',
      'email.email': 'Formato errado de E-mail.',
      'email.unique': 'Este E-mail já foi registrado.',
      'name.required': 'Nome obrigatório',
      'telephone.required': 'Telefone obrigatório.',
      'telephone.unique': 'Este Telefone já foi registrado.'
    }
  }
}

module.exports = StoreCliente
