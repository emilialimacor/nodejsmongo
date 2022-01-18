const clientes_db = require('../models/clientes')

exports.listar_clientes = (req, res) => {
  clientes_db.find({}, (erro, resultado) => {
    if (erro) throw erro
    res.render('views/lista', { resultado })
  })
}

exports.buscar_clientes = (req, res) => {
  req.body.buscaNome
  clientes_db.find({'nome': new RegExp(nome, 'i')}).toArray((err, resultado) => {
    if (erro) throw erro
    res.render('views/lista', { resultado })
  })
}

exports.cadastrar_clientes_get = (req, res) => {
  const resultado = []
  res.render('views/cadastro', { resultado })
}

exports.cadastrar_clientes_post = (req, res) => {
  if (req.body.idCliente == '') {
    const salva_clientes = new clientes_db()

    salva_clientes.nome = req.body.nome
    salva_clientes.endereco = req.body.endereco
    salva_clientes.bairro = req.body.bairro
    salva_clientes.cidade = req.body.cidade
    salva_clientes.telefone = req.body.telefone
    salva_clientes.email = req.body.email
    

    salva_clientes.save((erro) => {
      if (erro) throw erro
      return res.redirect('/cadastro')
    })
  } else {
    const id = req.body.idCliente
    clientes_db.findById(id, (erro, resultado) => {
      if (erro) throw erro
      resultado.nome = req.body.nome
      resultado.endereco = req.body.endereco
      resultado.bairro = req.body.bairro
      resultado.cidade = req.body.cidade
      resultado.telefone = req.body.telefone
      resultado.email = req.body.email

      resultado.save((erro) => {
        if (erro) throw erro

        return res.redirect('/cadastro')
      })
    })
  }
}

exports.deletar = (req, res) => {
  const id = req.params.id
  clientes_db.deleteOne({ _id: id }, (erro) => {
    if (erro) throw erro
    return res.redirect('/')
  })
}

exports.editar = (req, res) => {
  const id = req.params.id
  clientes_db.findById(id, (erro, resultado) => {
    if (erro) throw erro
    return res.render('views/cadastro', { resultado })
  })
}
