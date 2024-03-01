const express = require('express');
const app = express();
const port = 3000;

// Middleware que registra a data e hora de cada solicitação
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Servindo arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é meu primeiro aplicativo Express.');
});

// Rota sobre
app.get('/sobre', (req, res) => {
  res.send('Sobre Nós: Este é um exemplo de aplicativo Express para um exercício de CI/CD.');
});

// Rota contato
app.get('/contato', (req, res) => {
  res.send('Página de Contato: Envie-nos um email para contato@example.com.');
});

app.listen(port, () => {
  console.log(`Aplicativo ouvindo na porta ${port}`);
});
