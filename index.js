const express = require("express");
const mongoose = require("mongoose");
const porta = 3000;


 mongoose.connect( 
  'mongodb+srv://emilialima:milajack20@cluster0.ordue.mongodb.net/Clientes?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("Conectado ao Banco de Dados"));

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname, "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//toda vez que tiver uma rota /lista, vai chamar as rotas que estão em clientes-router
const clientes_routers = require("./routers/clientes-routers");
app.use("/", clientes_routers);

app.get("/", (req, res) => {
  res.send("Página Inicial");
});

app.listen(porta, () => {
  console.log("servidor rodando");
})