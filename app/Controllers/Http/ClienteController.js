'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clientes
 */

const Cliente = use('App/Models/Cliente')

class ClienteController {
  /**
   * Show a list of all clientes.
   * GET clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const clientes = await Cliente.all()

    return clientes
  }

  
  /**
   * Create/save a new cliente.
   * POST clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {

    const data = request.only(['name','email','telephone','cpf'])
    const cliente = await Cliente.create({...data})

    return cliente
  }

  /**
   * Display a single cliente.
   * GET clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const cliente = await Cliente.findBy('id',params.id)
    if (cliente === null){
      response.status(404).send({'erro':'Cliente Não encontrado'})
    }
    return cliente
  }

  /**
   * Update cliente details.
   * PUT or PATCH clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const cliente = await Cliente.findBy('id',params.id)

    if(cliente === null) {
      return response.status(404).send({'erro':'Cliente não encontrado'})
    }

    const data = request.only(['name','email','telephone','cpf'])
    cliente.merge({ ...data })
    await cliente.save()
    return cliente

  }

  /**
   * Delete a cliente with id.
   * DELETE clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    
    const cliente = await Cliente.findBy('id',params.id)

    if(cliente === null) {
      return response.status(404).send({'erro':'Cliente não encontrado'})
    }

    await cliente.delete()

  }
}

module.exports = ClienteController
