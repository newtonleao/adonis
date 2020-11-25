'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with enderecoentregas
 */

const Cliente = use('App/Models/Cliente')
const EnderecoEntrega = use('App/Models/EnderecoEntrega')
const Database = use('Database')

class EnderecoEntregaController {
  /**
   * Show a list of all enderecoentregas.
   * GET enderecoentregas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const enderecoEntregas = await EnderecoEntrega.all()

    return enderecoEntregas
  }

  
  /**
   * Create/save a new enderecoentrega.
   * POST enderecoentregas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['cliente_id','cep', 'bairro', 'cidade','complemento', 
    'longitude','latitude', 'uf'])
    
    const {cliente_id} = data 
    const cliente = await Cliente.findBy('id', cliente_id)

    if(cliente=== null){
      return response.status(404).send({'erro':'Cliente não existe'})
    }

    const enderecoCliente = await EnderecoEntrega.findBy('cliente_id', cliente_id)

    if(enderecoCliente !== null){
      return response.status(404).send({'erro':'Endereço já cadastrado'})
    }

    const enderecoEntrega = await EnderecoEntrega.create({...data})

    return enderecoEntrega
  }

  /**
   * Display a single enderecoentrega.
   * GET enderecoentregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const enderecoEntrega = await EnderecoEntrega.findBy('id',params.id)
    if (enderecoEntrega === null){
      response.status(404).send({'erro':'Endereço Não encontrado'})
    }
    return enderecoEntrega
  }

  /**
   * Update enderecoentrega details.
   * PUT or PATCH enderecoentregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const enderecoEntrega = await EnderecoEntrega.findBy('id',params.id)

    if(enderecoEntrega === null) {
      return response.status(404).send({'erro':'Endereço não encontrado'})
    }

    const data = request.only(['cep', 'bairro', 'cidade','complemento', 
    'longitude','latitude', 'uf'])
    enderecoEntrega.merge({ ...data })
    await enderecoEntrega.save()
    return enderecoEntrega
  }

  /**
   * Delete a enderecoentrega with id.
   * DELETE enderecoentregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const enderecoEntrega = await EnderecoEntrega.findBy('id',params.id)

    if(enderecoEntrega === null) {
      return response.status(404).send({'erro':'Endereço não encontrado'})
    }

    await enderecoEntrega.delete()
  }
}

module.exports = EnderecoEntregaController
