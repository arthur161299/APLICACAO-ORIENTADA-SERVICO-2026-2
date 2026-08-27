  import 'dotenv/config';
  import cors from 'cors';
  import express from 'express';

  const app = express();

  app.use(cors());

app.get('/', (req, res) => {
  // Esse link leva para a página /hello
  res.send('<h1>Hello World!</h1><a href="/hello">Ir para Olá, Turma!</a>');
});

app.get('/hello', (req, res) => {
  // Esse link volta para a página raiz /
  res.send('<h1>Olá, Turma!</h1><a href="/">Voltar para o Início</a>');
});


  const port = process.env.PORT || 3000;

  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
