const request = require('supertest');
const express = require('express');
const app = express();

// Inclua o código do seu app.js aqui ou exporte o app de app.js e importe aqui

app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é meu primeiro aplicativo Express.');
});

app.get('/sobre', (req, res) => {
  res.send('Sobre Nós: Este é um exemplo de aplicativo Express para um exercício de CI/CD.');
});

app.get('/contato', (req, res) => {
  res.send('Página de Contato: Envie-nos um email para contato@example.com.');
});

describe('Testando rotas do aplicativo Express', () => {
  test('GET / - Deve responder com "Olá, mundo! Este é meu primeiro aplicativo Express."', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Olá, mundo! Este é meu primeiro aplicativo Express.');
  });

  test('GET /sobre - Deve responder com informações sobre', async () => {
    const response = await request(app).get('/sobre');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Sobre Nós: Este é um exemplo de aplicativo Express para um exercício de CI/CD.');
  });

  test('GET /contato - Deve responder com informações de contato', async () => {
    const response = await request(app).get('/contato');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Página de Contato: Envie-nos um email para contato@example.com.');
  });
});
