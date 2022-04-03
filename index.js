const express = require("express");
const path = require("path");
require('dotenv').config();
const Comidas = require("./models/comidas");
const Alimentos = require("./models/alimentos");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());



app.get("/", async (req, res) => {
  const comidas = await Comidas.findAll();
  const alimentos = await Alimentos.findAll();

  res.render("index", {
    comidas, alimentos
  });
});



const Alimentoss = require("./models/alimentos");

app.get("/alimentos/:id", async (req, res) => {
  const alimentoss = await Alimentoss.findByPk(req.params.id);

  res.render("detalhesDois", {
    alimentoss,
  });
});


const Comidass = require("./models/comidas");

app.get("/comidas/:id", async (req, res) => {
  const comidaa = await Comidass.findByPk(req.params.id);

  res.render("detalhes", {
    comidaa,
  });
});










  app.listen(port || process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${port}`));