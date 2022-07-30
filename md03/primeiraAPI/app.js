const express = require("express"); // Importando o Express pra dentro do meu projeto

const { v4: bananinha } = require("uuid");

const app = express();

const data = require("./data");

app.use(express.json());

app.post("/create", (req, res) => {
  data.push({ ...req.body, id: bananinha() });

  return res
    .status(201)
    .json({ message: "Seu documento foi criado!", array: data });
});

app.get("/read", (req, res) => {
  return res.status(200).json(data);
});

app.get("/details/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentDocument) => currentDocument.id === id);

  return res.status(200).json(document[0]);
});

app.put("/edit/:id", (req, res) => {
  const { id } = req.params;

  data.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      data[i] = { ...req.body, id: currentDocument.id };
    }
  });

  const newDocument = data.filter(
    (currentDocument) => currentDocument.id === id
  );

  return res.status(200).json(newDocument[0]);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentDocument) => currentDocument.id === id);

  const index = data.indexOf(document[0]);

  data.splice(index, 1);

  return res.status(200).json(data);
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000.");
});
