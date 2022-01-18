const mongodb = require('mongodb').MongoClient
const url =
  'mongodb+srv://emilialima:milajack20@cluster0.ordue.mongodb.net/Clientes?retryWrites=true&w=majority'

  mongodb.connect(url,{ useNewUrlParser: true }, (err, client)=>{
    if(err) return console.log(err)
    db = client.db('Clientes')
  })

const client = new mongodb(url)

async function conectar() {
  try {
    await client.connect()
    console.log('Conectado ao banco de dados')
  } catch (erro) {
    console.log(erro)
  }
}
conectar()
module.exports = client
