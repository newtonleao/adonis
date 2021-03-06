'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.post('/register', 'AuthController.register')
.validator('RegisterAuth')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/app','AppController.index').middleware(['auth'])

Route.group(() => {
  Route.resource('tweets', 'TweetController')
  .apiOnly()
  .except('update')
}).middleware('auth')

Route.post('/clientes','ClienteController.store')
.validator('StoreCliente')

Route.group(() => {
  Route.resource('clientes', 'ClienteController')
  .apiOnly()
  .except('store')
})

Route.post('/categorias','CategoriaController.store')
.validator('StoreCategoria')

Route.group(() => {
  Route.resource('categorias', 'CategoriaController')
  .apiOnly()
  .except('store')
})

Route.post('/fornecedors','FornecedorController.store')
.validator('StoreFornecedor')

Route.group(() => {
  Route.resource('fornecedors', 'FornecedorController')
  .apiOnly()
  .except('store')
})

Route.post('/enderecoEntregas','EnderecoEntregaController.store')
.validator('StoreEnderecoEntrega')

Route.group(() => {
  Route.resource('enderecoEntregas', 'EnderecoEntregaController')
  .apiOnly()
  .except('store')
})

