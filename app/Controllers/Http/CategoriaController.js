'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */
const Categoria = use('App/Models/Categoria')

class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const categoria = await Categoria.all()
    return categoria
  }

  
  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['descricao'])
    const categoria = await Categoria.create({...data})

    return categoria
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const categoria = await Categoria.findBy('id',params.id)

    if (categoria === null){
      response.status(404).send({'erro':'Catergoria Não encontrada'})
    }
    return categoria

  }

  /**
   * Update categoria details.
   * PUT or PATCH categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    
    const categoria = await Categoria.findBy('id', params.id)

    if(categoria=== null){
      return response.status(404).send({'erro':'Categoria não existe'})
    }

    const data = request.only(['descricao'])

    categoria.merge(data)
    categoria.save()
    return categoria


  }

  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const categoria = await Categoria.findBy('id', params.id)

    if(categoria=== null){
      return response.status(404).send({'erro':'Categoria não existe'})
    }

    categoria.delete()
  }
}

module.exports = CategoriaController
