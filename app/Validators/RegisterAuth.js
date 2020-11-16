'use strict'

class RegisterAuth {

  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      username: 'required|unique:users'
    }
  }

  get messages () {
    return {
      'email.required': 'E-mail obrigatório.',
      'email.email': 'Formato errado de E-mail.',
      'email.unique': 'Este E-mail já foi registrado.',
      'password.required': 'Password obrigatório',
      'username.required': 'Usuário obrigatório',
      'username.unique': 'Usuário já cadastrado'
    }
  }
}

module.exports = RegisterAuth
