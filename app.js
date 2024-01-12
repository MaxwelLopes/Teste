const express = require('express');
const app = express();
const User = require('./models/user');
const novoUsuario = {
  name: 'teste',
  email: 'teste@teste.com',
  password: 'teste',
};

// Crie o usuário no banco de dados
User.create(novoUsuario)
  .then((usuarioCriado) => {
    console.log('Usuário criado com sucesso:', usuarioCriado);
  })
  .catch((erro) => {
    console.error('Erro ao criar usuário:', erro);
  });

app.listen(3000, () => {
  console.log("Servidor ativo http://localhost:3000");
});
