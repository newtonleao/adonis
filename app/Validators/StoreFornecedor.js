'use strict'

class StoreFornecedor {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.
    response.status(422).send(errorMessages)
  }

  get rules () {
    return {
      categoria_id: 'required',
      name: 'required',
      email: 'required|email|unique:fornecedors', 
      telephone: 'required|unique:fornecedors',
    }
  }

  get messages () {
    return {
      'email.required': 'E-mail obrigatório.',
      'email.email': 'Formato errado de E-mail.',
      'email.unique': 'Este E-mail já foi registrado.',
      'categoria_id.required': 'Categoria obrigatória',
      'name.required': 'Nome obrigatório',
      'telephone.required': 'Telefone obrigatório',
      'telephone.unique': 'Telefone já cadastrado para outro cliente'
    }
  }
}

module.exports = StoreFornecedor
