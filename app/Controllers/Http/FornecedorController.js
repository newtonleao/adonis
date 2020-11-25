'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedors
 */
const Fornecedor = use('App/Models/Fornecedor')
const Categoria = use('App/Models/Categoria')
const Database = use('Database')

class FornecedorController {
  /**
   * Show a list of all fornecedors.
   * GET fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {

  const fornecedores = await Database
  .select('fornecedors.*','categorias.descricao')
  .table('fornecedors')
  .innerJoin('categorias', 'categorias.id', 'fornecedors.categoria_id')

    return fornecedores
  }

  /**
   * Create/save a new fornecedor.
   * POST fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['categoria_id','name', 'email', 'telephone','cnpj'])
    
    const {categoria_id} = data 
    const categoria = await Categoria.findBy('id', categoria_id)

    if(categoria=== null){
      return response.status(404).send({'erro':'Categoria não existe'})
    }

    const fornecedor = await Fornecedor.create({...data})

    return fornecedor
  }

  /**
   * Display a single fornecedor.
   * GET fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

   /* const fornecedor = await Fornecedor.findBy('id',params.id)
    if (fornecedor === null){
      response.status(404).send({'erro':'Fornecedor Não encontrado'})
    }
    return fornecedor */

   const fornecedor = await Database
  .select('fornecedors.*','categorias.descricao')
  .table('fornecedors')
  .innerJoin('categorias', 'categorias.id', 'fornecedors.categoria_id')
  .where('fornecedors.id',params.id)
  
  console.log('fornecedor -' + fornecedor + '-')
  if (fornecedor == null || fornecedor == ''){
    response.status(404).send({'erro':'Fornecedor Não encontrado'})
  }

  return fornecedor
  }

  /**
   * Update fornecedor details.
   * PUT or PATCH fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const fornecedor = await Fornecedor.findBy('id',params.id)

    if(fornecedor === null) {
      return response.status(404).send({'erro':'Fornecedor não encontrado'})
    }

    const categoria_id = request.only(['categoria_id']).categoria_id
    
    const categoria = await Categoria.findBy('id',categoria_id)

    if(categoria === null) {
      return response.status(404).send({'erro':'Categoria não encontrado'})
    }

    const data = request.only(['name','email','telephone','categoria_id','cnpj'])
    fornecedor.merge({ ...data })
    await fornecedor.save()
    return fornecedor
  }

  /**
   * Delete a fornecedor with id.
   * DELETE fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fornecedor = await Fornecedor.findBy('id',params.id)

    if(fornecedor === null) {
      return response.status(404).send({'erro':'Fornecedor não encontrado'})
    }

    await fornecedor.delete()
  }
}

module.exports = FornecedorController
