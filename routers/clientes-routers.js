const express = require('express')
const router = express.Router()

const clientesController = require('../controllers/clientes-controllers')


router.get('/', clientesController.listar_clientes)

router.get('/cadastro', clientesController.cadastrar_clientes_get)

router.post('/cadastro', clientesController.cadastrar_clientes_post)

router.get('/deletar/:id', clientesController.deletar)

router.get('/editar/:id', clientesController.editar)

module.exports = router
